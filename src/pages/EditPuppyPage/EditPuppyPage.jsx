
import {useLocation} from 'react-router-dom';
import {useState} from 'react'

export default function EditPuppyPage({ handleUpdatePuppy }) {
    const { state: {puppy} } = useLocation()
    const [currentPuppy, setCurrentPuppy] = useState({
        _id: puppy._id,
        name: puppy.name,
        breed: puppy.breed,
        age: puppy.age
    })
    
    function test() {
      console.log('PUPPY CHOSEN TO EDIT = >',puppy._id)
    }
    test()

    function handleChange(e) {
        console.log(e.target.value)
        setCurrentPuppy({...currentPuppy, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleUpdatePuppy(currentPuppy);
    }
  return (
    <main>
        return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value= {currentPuppy.name}
              onChange={handleChange}
              required
            />
            <label>Breed</label>
            <input
              type="text"
              name="breed"
              value= {currentPuppy.breed}
              onChange={handleChange}
              required
            />
            <label>Age</label>
            <input
              type="number"
              name="age"
              value= {currentPuppy.age}
              onChange={handleChange}
              required
            />
            <button type="submit">
              ADD PUPPY
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;bleh</p>
      </div>
    </main>
    );

} 