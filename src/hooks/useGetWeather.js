import React,{useEffect, useState} from 'react'

import * as Location from 'expo-location'

import {WEATHER_API_KEY} from '@env'


export const useGetWeather=()=>{
  const[loading,setLoading]=useState(true)
  const[error,setError]=useState(null)
  const[weather,setWeather]=useState([])
  const[lat,setLat]=useState([])
  const[lon,setLon]=useState([])
    const fetchWeatherData=async()=>{
      try{
      const res=await fetch(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
      const data=await res.json()
      setWeather(data)
      
      }catch(err){
        setError('Could not fetch the data')
      }finally{
        setLoading(false)
      }
    }
    useEffect(()=>{
    (async()=>{
      let {status}=await Location.requestForegroundPermissionsAsync()
      if(status!=='granted'){
        setError(' Permission to access location was Denied')
        return
      }
      let location=await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude) 
      await fetchWeatherData()
    })()
  },[lat,lon])
  return [loading,error,weather]
}

