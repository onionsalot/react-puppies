import React from 'react';
import { Link } from 'react-router-dom';

export default function PuppyListItem({puppy}) {
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
        <Link to={{pathname: '/details', state: { puppy }}}>DELETE</Link>
        </td>
      </tr>
    </>
  );
}
