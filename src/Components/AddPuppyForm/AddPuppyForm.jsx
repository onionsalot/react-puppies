import {useState} from 'react'
import * as puppiesAPI from '../../utilities/puppies-api'

export default function AddPuppyForm({handleAddPuppy}) {
    const [puppy, setPuppy] = useState({
        name: '',
        breed: '',
        age: ''
    })
    const [error, setError] = useState('');

    function handleChange(e) {
        console.log(e.target.value)
        setPuppy({...puppy, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e) {
      e.preventDefault();
      const newPuppy = await puppiesAPI.create(puppy)
      handleAddPuppy(newPuppy)
    }

    return (
      <div>
        <h1>Add a Puppy</h1>
        <div>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value= {puppy.name}
              onChange={handleChange}
              required
            />
            <label>Breed</label>
            <input
              type="text"
              name="breed"
              value= {puppy.breed}
              onChange={handleChange}
              required
            />
            <label>Age</label>
            <input
              type="number"
              name="age"
              value= {puppy.age}
              onChange={handleChange}
              required
            />
            <button type="submit">
              ADD PUPPY
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    );
  }
  