import React from 'react'
import "./CountryCard.css"

const CountryCard = ({ country }) => {

    const { capital, coatOfArms, continents, flags, maps, name, population, region, startOfWeek } = country

    const { png, svg } = coatOfArms;

    return (
        <>
            <div class="flip-card mb-14 ">
                <div class="flip-card-inner ">
                    <div class="flip-card-front">
                        <div className="img-container">
                            <img className='rounded-xl' src={flags.png} alt="" />
                        </div>
                        <h3 className='text-neutral-900 text-xl' >{name.common}</h3>
                        <h1></h1>
                        <div className='text-left mt-2'>
                            <p className='text-sm'>Capital: <i style={{ fontSize: '12px', color: 'red' }}>{capital}</i></p>
                            <p className='text-sm'>Continents: <i style={{ fontSize: '12px', color: 'green' }}>{continents}</i></p>
                            <p className='text-sm'>Population: {population}</p>
                            <div className='flex justify-between items-center'>
                                <p className='text-sm mt-3 '>Region: {region}</p>
                            </div>

                        </div>
                    </div>
                    <div class="flip-card-back bg-bkack relative">
                        <img src={png} alt="" />
                        <div className='absolute bottom-1 '>
                            <p class="title mt-7 text-white  text-xl"> Official Name: <i className='text-sm '>{name.official}</i></p>

                        </div>
                    </div>
                </div>
                <a href={maps.googleMaps}>
                <button className='text-sm'>
                    View in Map
                    <div class="arrow-wrapper ">
                        <div class="arrow"></div>
                    </div>
                </button>
                </a>
            </div>
        </>
    )
}

export default CountryCard
