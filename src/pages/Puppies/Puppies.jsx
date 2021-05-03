import { checkToken } from '../../utilities/users-service'
import PuppyList from '../../Components/PuppyList/PuppyList'

export default function Puppies({showPuppies, handleDeletePuppy}) {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate)
  }
  return (
    <>
    <PuppyList showPuppies={showPuppies} handleDeletePuppy={handleDeletePuppy} />
    <button onClick={handleCheckToken}>CHECK WHEN MY LOGIN EXPIRES</button>   
    </>  
  );
}