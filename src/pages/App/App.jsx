import AuthPage from '../AuthPage/AuthPage';
import {useState, useEffect } from 'react';
import './App.css';
import { Route, Switch, Redirect , useHistory} from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../Components/NavBar/NavBar';
import Puppies from '../Puppies/Puppies'
import * as puppiesAPI from '../../utilities/puppies-api'
import AddPuppyPage from '../../Components/AddPuppyForm/AddPuppyForm';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [showPuppies, setShowPuppies] = useState([])
  const history = useHistory();

	useEffect(() => {
		// This is listening for each time puppies state is changed,
		// then will run our function below to reroute
		history.push('/');
	}, [showPuppies, history]);
  useEffect(() => {
    async function getPuppies() {
      const puppies =await puppiesAPI.getAll();
      setShowPuppies(puppies);
      console.log(`from useEffect in APP => ${showPuppies}`);
    }
    getPuppies();
  }, []);

  function handleAddPuppy(newPuppy) {
    console.log(`handleAddPuppy's call => ${newPuppy}`)
    setShowPuppies([...showPuppies, newPuppy])
    console.log(showPuppies)
  }

  return (
    <main className="App">
      { user ?
      <>
        <NavBar user={user} setUser={setUser}/>
        <Switch>
          <Route exact path="/">
            <Puppies showPuppies={showPuppies}/>
          </Route>
          <Route exact path="/new">
            <AddPuppyPage handleAddPuppy={handleAddPuppy}/>
          </Route>
        </Switch>
      </>
        :
        <AuthPage setUser= {setUser}/>
      }
    </main>
  );
}