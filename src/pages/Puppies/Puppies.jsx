import { checkToken } from '../../utilities/users-service'
import PuppyList from '../../Components/PuppyList/PuppyList'

export default function Puppies({showPuppies}) {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate)
  }
  return (
    <>
    <PuppyList showPuppies={showPuppies} />
    <button onClick={handleCheckToken}>CHECK WHEN MY LOGIN EXPIRES</button>   
    </>  
  );
}