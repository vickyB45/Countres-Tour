import React from 'react'
import { countryFact } from '../api/ContryData'

const About = () => {
  return (
    <div className='py-10 px-20 lg:px-32  '>
      <h2 className='text-4xl sm:text-5xl lg:text-7xl text-center mb-7 bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text  '>
        Here are The Intresting Fact's We're Proud Of
      </h2>
      <div className="container grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-4">
        {
          countryFact.map((item) => (
            <a href={item.officialWebsite} target='_blank'>
              <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} className="hover:-translate-y-3 transition-transform p-3 rounded cursor-pointer " key={item.id}>
                <h2 className='text-center text-xl mb-3'>{item.countryName}</h2>
                <p><strong>Capital: </strong>{item.capital}</p>
                <span><strong>population:  </strong> {item.population}</span>
                <p className='text-neutral-500 text-xs mt-3'><strong>Fact: </strong> {item.interestingFact}</p>
              </div>
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default About
