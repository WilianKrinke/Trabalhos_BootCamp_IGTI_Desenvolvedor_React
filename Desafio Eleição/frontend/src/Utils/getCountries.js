import { countriesUrl } from "./consumingUrls";

export async function getCountrys (){   
    const data = await fetch(countriesUrl)
    const countries = await data.json();
    return countries
}

