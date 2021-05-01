import sendRequest from './send-request.js'
const BASE_URL = '/api/puppies'

export function getAll() {
    console.log('puppiesAPI hit')
    return sendRequest(BASE_URL);
}

export function create(puppy) {
    console.log('puppiesAPI.create HIT')
    return sendRequest(BASE_URL, 'POST', puppy);
}