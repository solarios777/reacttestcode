import react, { useState } from "react"


const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pakistan", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];


const CounCities=()=>{

    const [cities, setcities]=useState([])



    const handleChange=(e)=>{
        const selectedValue=e.target.value
        const selectedCountry= countries.find((c)=>c.value===selectedValue)

        setcities(selectedCountry?selectedCountry.cities:[])
    }
    return ( 
        <div>
            <select name="" id="" onChange={(e)=>handleChange(e)}>
                <option value="">select country </option>
                {
                    countries.map((country , index)=>(
                        <option key ={index} value={country.value}>
                            {
                                country.name
                            }
                        </option>
                    ))
                }
            </select>

            <select name="" id="">
                {/* <option value="">
                    select city
                </option> */}
                {
                    cities.map((city,index)=>(
                        <option key ={index}>
                            {city}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default CounCities