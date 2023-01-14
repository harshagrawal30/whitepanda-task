import React from 'react'
import './css/carBookPopUp.css'
import image from '../assests/BookConfirm.png'
import { useNavigate } from 'react-router-dom'
function CarBookPopUp({ booked, car, dates }) {
    const navigate = useNavigate();
    return (
        <div id='carBookPopUpContainer'>
            <div>
                <img src={image} id='popUpImg' />
            </div>
            <div id='popUpContent'>
                <h2>{booked ? 'Booking Confirmed !' : 'Something Went Wrong'}</h2>
                {booked ? <p>You have booked {car.name} for the duration {dates.issueDate} - {dates.endDate}</p> : <p>Try Again Later</p>}

                {booked ? <button id='popUpButton' onClick={() => navigate('/')}>Continue</button> : <button id='popUpButton' onClick={() => navigate('/')}>Ok</button>}
            </div>
        </div>
    )
}

export default CarBookPopUp
