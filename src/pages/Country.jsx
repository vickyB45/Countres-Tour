
import React from "react";
import { countries } from "../api/ContryData";

const Country = (props) => {

  return (
    <div className=" flex justify-between">
      <div id="main-box" className=" height p-4  overflow-scroll">
        {
          countries.map((item) => (
            <div className={`max-w-xl bg-${props.bg} p-3 rounded-lg shadow-lg overflow-hidden mb-10 cursor-pointer border-b-2`}>
              <img
                src={item.flag}
                alt={`${item.name} Flag`}
                className="w-full object-cover"
              />

              <div className="p- ">
                <h1 className={`text-4xl text-center font-bold text-${props.text} my-2 `}>{item.name}</h1>
                <p className={` mt-2 text-${props.text}`}>
                  <strong>Population:</strong> {item.population}
                </p>
                <p className={` mt-2 text-${props.text}`}>
                  <strong>Capital:</strong> {item.capital}
                </p>
                <p className={`text-${props.text} mt-2`}>
                  <strong>Currency:</strong> {item.currency}
                </p>
                <p className={`text-${props.text} mt-2`}>
                  <strong>Famous Place:</strong> {item.popular_tourist_places.map((place, index) => (
                    <li key={index} >{place}</li>
                  ))}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-4 ">
                  <img className="h-40 w-72 rounded cursor-pointer   " src={item.img1} alt="" />
                  <img className="h-40 w-72 rounded cursor-pointer   " src={item.img2} alt="" />
                  <img className="h-40 w-72 rounded cursor-pointer    " src={item.img3} alt="" />
                  <img className="h-40 w-72 rounded cursor-pointer    " src={item.img4} alt="" />
                </div>

                <div className="mt-4">
                  <a style={{ color: '#5c5ccf' }}
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-${props.text} font-medium hover:underline `}
                  >
                    Visit Official Website
                  </a>
                </div>
              </div>
            </div>
          ))
        }

      </div>
      <div className=" min-h-screen w-1/2 pt-4">
        <div className=" rounded-lg shadow-lg overflow-hidden p-4 sticky top-14">
          <h2 className="text-center text-4xl text-orange-700 mb-4 underline">World Countries: Key Facts</h2>

          <strong className="mt-2 text-sm">Number of Countries: </strong><p className="tracking-tight text-neutral-500 text-sm mt-1 mb-3">There are 195 countries in the world today, which includes 193 member countries of the United Nations and 2 observer states (the Holy See and Palestine).</p>

          <strong className="mt-2 text-sm">World Population:</strong> <p className="tracking-tight text-neutral-500 text-sm mt-1 mb-3">The global population is approximately 8 billion people, as of 2024.</p>

          <h2 className="text-center text-2xl text-orange-700 mt-2 mb-2">Most Populous Countries:</h2>

          <p className="text-sm italic text-neutral-500"><strong >India: </strong>Approximately 1.43 billion people.</p>
          <p className="text-sm italic text-neutral-500"><strong >China: </strong> Approximately 1.41 billion people.</p>
          <p className="text-sm italic text-neutral-500"><strong>United States: </strong>Around 335 million people.</p>
          <p className="text-sm italic text-neutral-500"><strong>Indonesia: </strong>Around 275 million people.</p>
          <p className="text-sm mb-2 italic text-neutral-500"><strong>Pakistan: </strong>About 240 million people.</p>

          <p className="text-sm mb-4"><strong>Smallest Country by Area:</strong> <p className="text-neutral-500">Vatican City (Holy See), covering just 0.49 square kilometers. It is an independent city-state enclaved within Rome, Italy.</p></p>

          <p className="text-sm mb-4"><strong>Largest Country by Area:</strong> <p className="text-neutral-500">Russia covers 17.1 million square kilometers, making it the largest country in the world by land area.</p></p>


          <p className="text-sm mb-4"><strong>Richest Country (by GDP per capita):</strong> <p className="text-neutral-500">Luxembourg is one of the wealthiest countries in the world, with a high GDP per capita.</p></p>



          <p className="text-center text-md "><p className="text-2xl text-orange-700">Most Spoken Languages:</p> (The most spoken languages in the world are:)</p>
          <ol className="text-sm italic mt-2 mb-4 text-neutral-500">
            <li className="list-decimal">English (widely spoken across continents).</li>
            <li className="list-decimal">Mandarin Chinese (spoken by over a billion people in China).</li>
            <li className="list-decimal">Spanish (spoken widely across Europe, Latin America, and the US).</li>
          </ol>

          <p className="text-sm mb-4"><strong>Highest Life Expectancy:</strong> <p className="text-neutral-500">Monaco has the highest life expectancy, with people living on average 89 years.</p></p>

          <p className="text-center text-2xl text-orange-700 mb-2">Countries with Largest Land Area:</p>
          <ol className="text-sm italic mt-2 mb-4 text-neutral-500">
            <li className="list-decimal">Russia</li>
            <li className="list-decimal">Canada</li>
            <li className="list-decimal">United States</li>
            <li className="list-decimal">China</li>
            <li className="list-decimal">Brazil</li>
          </ol>

          <p className="text-sm mb-4"><strong> Most Developed Countries:</strong> <p className="text-neutral-500"> Countries like the <strong className="italic">United States</strong>, <strong className="italic">Germany</strong>, <strong className="italic">Japan</strong>, and <strong className="italic">Switzerland</strong> are known for their advanced infrastructure, technology, and high standard of living.</p></p>


          <p className="text-sm mb-4"><strong> Countries with the Most Natural Wonders:</strong> <p className="text-neutral-500">  Countries like <strong className="italic">Brazil</strong> (Amazon Rainforest), <strong className="italic">Australia</strong> (Great Barrier Reef), and <strong className="italic">New Zealand</strong> (mountain ranges, lakes) are famous for their natural beauty.</p></p>


        </div>

      </div>
    </div>
  );
};

export default Country;
