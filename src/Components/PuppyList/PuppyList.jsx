import PuppyListItem from '../PuppyListItem/PuppyListItem'

export default function PuppyList({showPuppies, handleDeletePuppy}) {
    const puppies = showPuppies.map(puppy => 
    <PuppyListItem puppy={puppy} handleDeletePuppy={handleDeletePuppy}/>)

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