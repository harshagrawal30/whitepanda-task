import React from 'react'
import './css/carCard.css'
import { useNavigate } from 'react-router-dom'
import { colorPicker, peopleIcon } from '../assests/socialMediaIcons';
function CarCard({ car }) {

    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='carMobileView'  >
                <div id='imageContainer'>
                    <img src={car.image} className='image' />
                </div>
                <div id='carDetail'>
                    <h3 id='carName'>{car.name}</h3>
                    <div id='oneRow'>
                        <h4 className='light-gray'><span className='light-gray'>{colorPicker}</span>{car.color}</h4>
                        <h4 className='light-gray'><span className='light-gray'>{peopleIcon}</span>{car.seater} Seater</h4>
                    </div>
                </div>
            </div>
            <div>
                <h3 id='rent'>₹ {car.rentPerDay}</h3>
            </div>
            <div id='oneRow2'>
                <div id='bookedBox'>
                <button id={car.isBooked ? 'NBook' : 'book'} disabled={car.isBooked} onClick={() => navigate('/carBook', { state: { car: car } })}>{!car.isBooked ? 'Book Now' : 'Book Now'}</button>

                {car.isBooked ? <span  id='CurrUnavailCarCard'>Currently Unavailable!</span> : null}

                </div>
                <button id='details' onClick={() => navigate('/carDetails', { state: { car: car } })}>Details</button>
            </div>
        </div>
    )
}

export default CarCard
