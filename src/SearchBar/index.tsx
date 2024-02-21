import ReactSelect from "react-select"
import { makes } from "../constants";
import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

type ButtonProps = {
  design?:string;
}

//first component search button
const SearchButton = ({design}: ButtonProps)=> {
  return (
    <button className={`ml-3 z-10 ${design}`} >
      <img src="/magnifying-glass.svg" width={40} height={40} a/>
    </button>
  );
}

//second component search bar
const SearchBar = () => {
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [params, setParams] = useSearchParams();

  type OptionType = {
    label: string;
    value: string;
  };

  //event parameters type shoul define by react element types
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setParams({
      make: make.toLowerCase(),
      model: model.toLowerCase(),
    });
  };
  //options shoul be  : [{label:'Make', Value:'xyz'}]
  //everytime state chaged  and rendered, instead of always calculating&rendering
  //and lower performance can be use UseMemo!

  const options: OptionType[] = useMemo(
    () =>
      makes.map((make) => ({
        label: make,
        value: make,
      })),
    [makes]
  );

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <ReactSelect
          options={options}
          className="w-full text-black"
          onChange={(e: OptionType | null) => e && setMake(e.value)}
        />
        <SearchButton design={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <img
          src="/model-icon.png"
          width={25}
          alt="icon"
          className="absolute ml-4"
        />
        <input
          onChange={(e) => setModel(e.target.value)}
          placeholder="exp:Civic"
          className="searchbar__input rounded text-black"
          type="text"
        />
        <SearchButton />
      </div>
    </form>
  );
}

export default SearchBar
