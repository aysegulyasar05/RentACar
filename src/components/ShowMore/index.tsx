
import { useSearchParams } from 'react-router-dom'
import CustomButton from '../CustomButton'

const ShowMore= () => {
    const [params,setParams]= useSearchParams();

    // take limit from url
    const limit = Number(params.get('limit')) || 5;

    //1)if its not url paramatr; user just login and showing just 5 car 
    // add limit parameter to url and value will be 10
    //2) if there is limit param on url
    //it means user press few times to show more button
    // and add 5 cars to url
    const handleLimit = ()=> {
        //define new limit
        const newLimit = String(limit+5);
        params.set('limit',newLimit);
        //update url
        setParams(params);
    }
  return (
    <div className="w-full flex-center gap-5 my-10">
      {limit < 30 && (
        <CustomButton handleClick={handleLimit} 
        title="Show More" />
      )}
    </div>
  );
}

export default ShowMore

