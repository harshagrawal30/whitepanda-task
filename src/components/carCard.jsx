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
                    <h3>{car.name}</h3>
                    <div id='oneRow'>
                        <h4><span>{colorPicker}</span>{car.color}</h4>
                        <h4><span>{peopleIcon}</span><br/>{car.seater} seater</h4>
                    </div>
                </div>
            </div>
            <div>
                <h3 id='rent'>{car.rentPerDay} Rs</h3>
            </div>
            <div id='oneRow2'>
                <button id={car.isBooked ? 'NBook' : 'book'} disabled={car.isBooked} onClick={() => navigate('/carBook', { state: { car: car } })}>{!car.isBooked ? 'Book Now' : 'Booked'}</button>
                <button id='details' onClick={() => navigate('/carDetails', { state: { car: car } })}>Details</button>
            </div>
        </div>
    )
}

export default CarCard
