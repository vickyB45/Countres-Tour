import React, { useEffect, useState } from 'react'
import { GetData } from '../api/FetchData'
import CountryCard from '../component/CountryCard'

const AboutCountry = () => {

const [data,setData] =useState([])

  useEffect(()=>{
    GetData().then((item)=> setData(item))
   
  },[])

  console.log(data)
  return (
    <div id='change' className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 mt-20 px-24 sm:px-20 md:px-32'>
      {
        data?data.map((country,index)=>{
          return <CountryCard country = {country} key={index}/>
        }):<p>Loading</p>
      }
    </div>
  )
}

export default AboutCountry
