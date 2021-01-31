import React, { useEffect, useState } from "react"
import weatherStyles from "./weather.module.scss"

function WeatherComponent() {
  const OPEN_WEATHER = "e16828cc9474d70f6316405aa0b3a2a2"
  const [requestUrl, setRequestUrl] = useState(null)
  const [weatherResult, setWeatherResult] = useState({})
  const [locationPermission, setLocationPermission] = useState(null)

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true,
        maximumAge: 0,
      })
      function success(position) {
        setRequestUrl(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${OPEN_WEATHER}&units=metric`
        )
      }
      function error(error) {
        if (error.code === 1) {
          setLocationPermission(0)
        }
      }
    }
  }

  const fetchData = async () => {
    getLocation()
    let res = await fetch(requestUrl)
    try {
      let response = await res.json()
      setWeatherResult({
        city: response.name,
        icon: response.weather[0].icon,
        description: response.weather[0].description,
        temp: response.main.temp,
        feels_like: response.main.feels_like,
      })
    } catch (e) {
      setWeatherResult(null)
    }
  }

  useEffect(() => {
    fetchData()
  }, [requestUrl])

  return (
    <div
      className={`widget ${weatherStyles.weather} ${
        !weatherResult || typeof weatherResult != "object"
          ? "widget__noData"
          : ""
      }`}
    >
      {locationPermission === 0 ? (
        <div>
          You must enable your browsers location service to get your locations
          weather
        </div>
      ) : (!weatherResult || weatherResult === {} ? (
        <div>Loading...</div>
      ) : (
        <div className={`group ${weatherStyles.group}`}>
          <div className={`heading ${weatherStyles.location}`}>
            {weatherResult.city}
          </div>
          <div className="group-content">
            <img
              src={`https://openweathermap.org/img/wn/${weatherResult.icon}@2x.png`}
              alt={`${weatherResult.description} icon`}
            />
          </div>
          <div className={`weatherDescription ${weatherStyles.weatherDetails}`}>
            {weatherResult.description}
          </div>
          <div className={`${weatherStyles.weatherDetails}`}>
            Temp: {Math.round(weatherResult.temp)}°
          </div>
          <div className={`${weatherStyles.weatherDetails}`}>
            Feels like: {Math.round(weatherResult.feels_like)}°
          </div>
        </div>
      ))}
    </div>
  )
}
export default WeatherComponent
