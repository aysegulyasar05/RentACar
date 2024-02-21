import { colors } from "../constants";
import { CarType } from "../types";


//create a photo link for every car which using for parameter
//?baseUrl:https://cdn.imagin.studio/getimage 
//?url:base__URL?customer=hrjavascript-mastery&make=ford&modelFamily=focus
export const GenerateImage = (
    car:CarType,
    angle?:string
    ):string => {
        // set an example/send parameter to base url
         const url = new URL('https://cdn.imagin.studio/getimage');

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', car.make);
  url.searchParams.append('modelFamily',car.model.split('/')[0].split(' ')[0]);
  url.searchParams.append('zoomType', 'fulscreen');
  url.searchParams.append('angle', String(angle));

  //rastgele renk tanımlama
  const i = Math.round(Math.random() * colors.length);
  url.searchParams.append('paintId', colors[i]);

  return String(url);

    };
    