
import { useEffect, useState } from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

export default function CountriesList( {query}) {
  // let countriesData = []
  const [countriesData, setCountriesData] = useState([])

  //  const [query, setQuery] = useState("")
  const filteredCountries = countriesData.filter(country => country.names.common. toLowerCase().includes(query.toLowerCase()))
//  const handleChange = (e) => {
//   setQuery(e.target.value)
//  }
useEffect(() => {
fetch(
  'https://api.restcountries.com/countries/v5?response_fields=names.common,capital,flag.url_svg,capitals,region,population&limit=100',
  {
     headers: { 
      'Authorization': 'Bearer rc_live_86a83a0137fa4d5d9e2a42e3494cf491'
     }
     }
)
.then((response) => response.json())
 .then((result) =>{
   console.log("result is", result);
  setCountriesData(result.data.objects)
 })
 }, [])

/*
useEffect => 
     -to perform something on the first render of the component
    -to perform something when the state is changed
    - to perform something when the component is unmount (removed) from the web page
     
    Syntax:-

    useEffect(callback fn, dependency array)

    dependency array:- 
    is not available -> useEffect will be called on every render & re-render
    []-> useEffect is only called once
    is[state] -> useEffect will only called on render & on the state change


*/

console.log("CountriesList Component", countriesData);


 return (
    <>
    {/* <input type ="text" name="search" onChange={handleChange}/> */}
    <div className="countries-container">
      {/* <button onClick={() => setCountriesData([])}> Click Here</button> */}
      {
        filteredCountries.length !=0 ?
        (filteredCountries.map((country, idx) => (
          <CountryCard 
            key={idx}
            flag={country.flag.url_svg || "www.google.com"}
            name={country.names.common}
            population={country.population}
            capital={country.capitals}
            region={country.region}
          />)))
          :
          <p>Unable to find Country with name :-{query}</p>
      }
    </div>
    </>
  )
}