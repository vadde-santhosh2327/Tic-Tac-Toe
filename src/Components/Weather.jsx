import React, { useEffect, useState } from "react";
const Weather=()=>
{
    let api=
    {
        key:"3d6c2bc2dbea16127c68da8bccb3ddeb",
        url:"https://api.openweathermap.org/data/2.5/weather"
    }
    let [search,setSearch]=useState("")
    let [weather,setWeather]=useState({})
    function searchWeather()
    {
        fetch(`${api.url}?q=${search}&appid=${api.key}&units=metric`)
        .then(res=>res.json())
        .then(x=>setWeather(x))
        
    }
    let usekey=(e)=>
    {
        if (e.key==="Enter")
        {
            searchWeather()
        }
    }
    console.log(weather)
    return(
        <>
        <div>
            <input type="text" onChange={(e) => setSearch(e.target.value)}
            onKeyPress={usekey}/>
            <button onClick={searchWeather}>search</button>
        </div>
        {(weather.main !=undefined)?
        (
            <>
            <h3>{weather.name}</h3>
            <p>{weather.main.temp}</p>
            </>
        ):("data not found")
        }
       
        </>
    )
}
export default Weather