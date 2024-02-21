import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Select from 'react-select'
type FilterPropType = {
  title:string,
  options:OptionType[]
}

type OptionType = {
  label:string,
  value:string
}

const CustomFilter = ({title,options}:FilterPropType) => {
  const[selected,setSelected]= useState<OptionType| null>(null);
  const [params,setParams]= useSearchParams()
  useEffect(()=>{
    //adding parameter to url
const key =
  title === "Fuel Type"
    ? "fuel_type"
    : title === "Year"
    ? "year"
    : title === "Transmission"
    ? "transmission"
    : "none";
    //add url+
    if (selected?.value) {
      //if there is value add to url
      params.set(key, selected.value.toLowerCase());
    }else{
      // if there is no value remove from url
      params.delete(key)
    }
    // url update
    setParams(params);
  },[selected])
  
  return (
    <div className="text-black w-fit">
      <Select 
      onChange={(e)=>setSelected(e)}
      className='min-w-[100px]' options={options} placeholder={title}/>
    </div>
  );
}

export default CustomFilter
