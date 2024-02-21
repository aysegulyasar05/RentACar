import {filterType } from "../types";


const options = {
  method: 'GET',
 headers: {
    'X-RapidAPI-Key': '8c02535153msh6c99d1ae38cb76ep1caeafjsnc5002fd687c0',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};


export async function fetchCars({make='bmw',
    model='',
    limit='5',
    year='', 
    fuel_type='',
  transmission=''}: filterType)
  {        
    const res = await 
    fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&year=${year}&fuel_type=${fuel_type}&transmission=${transmission}`
    ,options)
    const data= await res.json()
    return data;
}

