import { MouseEventHandler } from "react";

export type ButtonPropsType = {
disabled?:boolean,
designs?:string,
btnType?:"button" | "submit" | "reset", //union types+string literals
title: string,
rIcon?:string;
handleClick?: MouseEventHandler<HTMLButtonElement>; //mouse olaylarinda calisan fonksiyon
//burada bu fonk bir buton elemanina mouse in etkilesimi ile tettiklenir
}


// api's car data type:

export interface CarType 
    {
    "city_mpg": number;
    "class": string;
    "combination_mpg": number;
    "cylinders": number;
    "displacement": number;
    "drive": 'fwd' | 'awd' |  'rwd' | '4wd';
    "fuel_type": "gas" | "electricity" | "diesel";
    "highway_mpg": number;
    "make": string;
    "model": string;
    "transmission": "automatic" | "manual";
    "year": number ;
}
// params type in url
export type filterType = {
  make?:string,
  model?:string,
  limit?:string,
  fuel_type?:string,
  year?:string,
  transmission?:string;
} 