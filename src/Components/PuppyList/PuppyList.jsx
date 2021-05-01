import PuppyListItem from '../PuppyListItem/PuppyListItem'

export default function PuppyList({showPuppies}) {
    const puppies = showPuppies.map(puppy => 
    <PuppyListItem puppy={puppy}/>)

      return (
<>
<h1>Puppy List</h1>
<main>
    <table>
    {puppies}
    </table>
</main>
</>
      );
    }