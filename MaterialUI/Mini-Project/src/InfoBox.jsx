import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css"

export default function InfoBox( {info}){
    let img_url = "https://plus.unsplash.com/premium_photo-1666896753543-15fb1853bae0?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   let HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   let COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   let RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww"
   
    return(
        <div className='info'>
          <div className='card-container'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
        sx={{ height: 140 }}
        image={ info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
              />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? <AcUnitIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <ThunderstormIcon/> }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
       
         <p>Temprature {info.temp}&deg;C</p>
         <p>Humidity {info.humidity}&deg;C</p>
         <p>Temp_min {info.temp_min}&deg;C</p>
         <p>Weather {info.weather}</p>
         <p>Feel_Like {info.feels_like}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>  
        </div>
    )
}