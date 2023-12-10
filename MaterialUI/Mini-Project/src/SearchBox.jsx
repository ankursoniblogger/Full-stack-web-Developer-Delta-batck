import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css"

export default function SearchBox( {updateInfo}){
    let [city , setCity] = useState("");
    let [error, setError] = useState(false)

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "7be99a71329cc772799efa74770e564d"; 

    let getWeatherInfo = async () => {
        try{
            let responce =   await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponce =   await responce.json()
       
            let result = {
               city: city,
               temp: jsonResponce.main.temp,
               temp_min: jsonResponce.main.temp_min,
               feels_like: jsonResponce.main.feels_like,
               humidity: jsonResponce.main.humidity,
               weather: jsonResponce.weather[0].description,
            }
            console.log(result);
            return result
         } catch(err) {
            throw err
            }
    }

    let handleChange = (event) => {
      setCity(event.target.value)
    }
    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("")
         let newInfo =  await  getWeatherInfo();
         updateInfo(newInfo);
        } catch(err) {
            setError(true)
        }
          
    }

    return(
        <div className='container'> 
        <div className='searchBox'>
        <h1 style={{textAlign: "center" , fontFamily: 'sans-serif'}}>Weather App! </h1>
            <form onSubmit={handleSubmit}>
            <TextField id="City" label="City name" variant="outlined" value={city} onChange={handleChange} required  /> <br /><br />
            <Button variant="contained" type='submit'>Search </Button>
            {error &&  <p style={{color: "red"}}>No such place found!</p>}
            </form>
        </div>
      </div>
    )
}

// q={city name}&appid={API key}