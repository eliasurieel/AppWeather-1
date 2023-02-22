import React, { useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=12769f9a9f0495274fa2a3fac99a2c2e`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="App">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name != undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Se siente como</p>
            </div>
            <div className="humedad">
              {data.main ? <p className='bold'>{data.main.humidity}</p> : null}
              <p>Humedad</p>
            </div>
            <div className="viento">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Vel. Viento</p>
            </div>
          </div>
        }



      </div>

      <div className="footer">
      <p><b>2022 © Pronosticx | Powered by <a href="https://www.linkedin.com/in/eliasurielgarcia">Elias Uriel Garcia</a></b></p>
      </div>

    </div>
  )
}

export default App
