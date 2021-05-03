import React from 'react';
import { Link } from 'react-router-dom';

export default function PuppyListItem({puppy, handleDeletePuppy}) {
  return (
    <>
      <tr>
        <td>
          <h1>{puppy.name}</h1>
          Breed: {puppy.breed} <br />
          Age: {puppy.age}
        </td>
        <td>
        <Link to={{pathname: '/details', state: { puppy }}}>DETAILS</Link><br />
        <Link to={{pathname: '/edit', state: { puppy }}}>EDIT</Link><br />
        <button onClick={() => handleDeletePuppy(puppy._id)}>DELETE</button>
        </td>
      </tr>
    </>
  );
}
