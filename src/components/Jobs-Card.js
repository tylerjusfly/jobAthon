import React from 'react'
import google from '../assets/images/google-svg.svg';

export const JobCard = ({position, location, type, company, tags}) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded p-6">
    <div className="flex">
        <div>
            <h3 className="text-xl mb-4 font-bold">
                <a href="show.html">{position}</a>
            </h3>
            <div className="text-l font-bold mb-4 location"> 
            <i className="fa-solid fa-location-dot"></i> {location} . {type}
            </div>
            <ul className="flex">
                <li className="flex items-center justify-center bg-black text-white rounded-xl py-1 px-3 mr-2 text-xs">
                    
                    <a href="#">{tags[0]}</a>
                </li>
                { tags[1] &&
                <li className="flex items-center justify-center bg-black text-white rounded-xl py-1 px-3 mr-2 text-xs">
                   <a href="#">{tags[1]}</a>
                </li> }

                { tags[2] &&
                <li className="flex items-center justify-center bg-black text-white rounded-xl py-1 px-3 mr-2 text-xs">
                    <a href="#">{tags[2]}</a>
                </li> }

            </ul>
            <div className="text-lg mt-4 company--card">
                <img className="company--img" src={google} alt='google'/> <span>{company}</span>
            </div>
        </div>
    </div>
</div>
  
  )
}
