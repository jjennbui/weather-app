import { useState } from "react";
import Container from "../currentWeather";
import ContainerFiveDays from "../forecast/index5days";
import styles from './searchbar.module.css'

export default function Searchbar() {
  const [city, setCity] = useState("");
  const apikey = "5bfc6c3f424f343fdaa60295350d0239";
  const [currentWeatherData, setCurrentWeatherData] = useState<CurrentWeather[]>([]);
  const [fiveDaysForecastData, setFiveDaysForecastData] = useState<FiveDays[]>([]);
  const currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&cnt=5&units=metric`;
  const fiveDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&cnt=5&units=metric`;

  async function grabData () {
    try {
      
      const response = await fetch(currentWeather);
      const currentWeatherApi = await response.json();
      console.log(currentWeatherApi);
      setCurrentWeatherData([currentWeatherApi]);

    
      const fiveDaysResponse = await fetch(fiveDays);
      const fiveDaysForecastApi = await fiveDaysResponse.json();
      console.log(fiveDaysForecastApi);
      setFiveDaysForecastData(fiveDaysForecastApi.list);


    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>

   
    <div className={styles.searchBar}>
      <input className={styles.input}
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      
      <button style={{ 
        borderRadius: '20px',
        border: '1px solid black',
        padding: '10px',
        margin: '5px'
     }} onClick={() => grabData()}>Search</button>
     </div>

     {city ? null : 
     <p className={styles.intro}> Welcome to FuturoWeather! <br></br> Enter a city and find the current weather and 5 day forecast!</p>}

     <div className={styles.currentWeather}>
      <Container data={currentWeatherData} />
      </div>

      <div className={styles.forecast}>
      <ContainerFiveDays data2={fiveDaysForecastData} />
      </div>
      </div>
  );
}
