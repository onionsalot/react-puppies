import PuppyListItem from '../PuppyListItem/PuppyListItem'

export default function PuppyList({showPuppies}) {
    const puppies = showPuppies.map(p => 
    <PuppyListItem
        name={p.name}
        breed={p.breed}
        age={p.age}
        
        />)
    console.log(`here be puppies => ${showPuppies}`)

      return (
<>
<h1>Puppy List</h1>
<main>
    {puppies}
</main>
</>
      );
    }