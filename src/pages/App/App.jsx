import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import {useState, useEffect} from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../Components/NavBar/NavBar';
import Puppies from '../Puppies/Puppies'
import * as puppiesAPI from '../../utilities/puppies-api'

export default function App() {
  const [user, setUser] = useState(getUser());
  const [showPuppies, setShowPuppies] = useState([])

  useEffect(function() {
    async function getPuppies() {
      const puppies =await puppiesAPI.getAll();
      setShowPuppies(puppies);
      console.log(`from useEffect in APP => ${showPuppies}`);
    }
    getPuppies();
  }, [])
  return (
    <main className="App">
      { user ?
      <>
        <NavBar user={user} setUser={setUser}/>
        <Switch>
          <Route path="/">
            <Puppies showPuppies={showPuppies}/>
          </Route>
        </Switch>
      </>
        :
        <AuthPage setUser= {setUser}/>
      }
    </main>
  );
}