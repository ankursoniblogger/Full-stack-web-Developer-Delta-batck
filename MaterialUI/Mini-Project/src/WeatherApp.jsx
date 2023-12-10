import { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './infoBox'

export default function WeatherApp(){
    let [weather, setWeather] = useState({
        city: "Delhi",
        temp: 17.5,
        humidity: 63 ,
        temp_min: 14,
        weather: "Haze",
        feels_like: 16.56
    })

    let updateInfo = (newInfo) => {
         setWeather(newInfo)
    }

    return(
        <div>

        <SearchBox updateInfo={updateInfo} /> 
        <InfoBox info={weather}/>
        </div>
        
    )
}