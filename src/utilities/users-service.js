import { token } from 'morgan';
import * as usersAPI from './users-api';
// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from 


export async function signUp(userData) {
    try{
        // Delegate the network request code to the users-api.js API module
        // which will ultimately return a JSON Web Token (JWT)
        const token = await usersAPI.signUp(userData);
        // Presist the token
        localStorage.setItem('token', token);
        console.log('after set item')
        // Baby step by returning whatever is sent
        return getUser();
    } catch {
        console.log('eh error?')
        throw new Error('Invalid Sign Up');
    }
}

// Retrieve the token from the localStorage
// If no token, set user to null
// If expired, remove from localStorage and set to null
// if token no expired, extract user object and set user state.
export function getToken() {
    // getItem returns null if there's no string
    const token = localStorage.getItem('token');
    if (!token) return null;
    // Check if expired, remove if it is
    const payload = JSON.parse(atob(token.split('.')[1]));
    // A JWT's exp is expressed in seconds, not milliseconds, so convert
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      return null;
    }
    return token;
  }

export function getUser() {
    console.log('currently in getUser')
    const token = getToken();
    console.log('token in getUser=>',token)
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function logOut() {
    const token = getToken()
    localStorage.removeItem('token', token)
}

export async function login(credentials) {
    try{
        // Delegate the network request code to the users-api.js API module
        // which will ultimately return a JSON Web Token (JWT)
        const token = await usersAPI.login(credentials);
        // Presist the token
        localStorage.setItem('token', token);
        // Baby step by returning whatever is sent
        return getUser();
    } catch {
        throw new Error('Invalid Sign Up');
    }
}

export async function checkToken() {
    return usersAPI.checkToken().then(dateStr => new Date(dateStr));
}