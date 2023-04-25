import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import logopic from "./image/logo1.png"
import {useState} from "react"
import axios from "axios"

function App() {
  
  
  const apiKey = "0838f271791864c3beaa8537720d900f"
  
  const [data, setData] = useState({})
  const [city, setCity] = useState("")
  const getWeatherData = (cityName)=>{
    
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey
    axios.get(apiUrl)
    .then((res)=>{
      console.log(res.data)
      setData(res.data)
    })
    .catch((e)=>{
      console.log(e)
    })
    
  }

  const handleSearch =()=>{
      
      getWeatherData(city)
      setCity("")
  }
  
 
  

  return (
    <div className="md-col-12">
      <div className="weatherBg">
        <h1 className="heading">weather app</h1>
        <div className="d-grid gap-3 col-4 mt-4">
        <input type="text" className="form-control" value={city} onChange={(e)=>{setCity(e.target.value)}}></input>
        <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
        </div>
        
      </div>
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weatherResultBox">
          <img src = {logopic} alt="weatherIcon" className="weatherIcon"></img>
          <h5 className="weatherCity">{data.name}</h5>
          <h5 className="weatherTemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
