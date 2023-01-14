import React from 'react'
import { useLocation } from 'react-router-dom';
import img1 from '../assests/img1.png';
import CurrBooking from '../components/currBooking';
import './css/carDetails.css'
import { useNavigate } from 'react-router-dom';
import { colorPicker, instagram, linkedin, peopleIcon, twitter } from '../assests/socialMediaIcons';
function CarDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const car = location.state.car;
    return (
        <div>
            <img src={img1} alt='img1' />
            <div className='box'>
                <div>
                    <img src={car.image} className='image' />
                </div>
                <div id='detailBox'>
                    <h2>{car.name}</h2>
                    <div id='oneRow1'>
                        <h4><span>{colorPicker}</span>{car.color}</h4>
                        <h4><span>{peopleIcon}</span><br/>{car.seater} seater</h4>
                    </div>
                    <h3>Rent Per Day: {car.rentPerDay} Rs</h3>
                    <button disabled={car.isBooked} id={car.isBooked ? 'NBook' : 'book'} onClick={() => navigate('/carBook', { state: { car: car } })}>Book Now</button>
                    {car.isBooked ? <span id='CurrUnavail'>Currently Unavailable</span> : null}
                </div>
            </div>
            <div id='carDetailBottom'>
                <h1>Car Details</h1>
                <hr />
                {car.isBooked ? <button id='NAvail'>Not Available</button> : <button id='Avail'>Available</button>}
                <h4>Vehicle Number: {car.vehNo}</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            {car.isBooked ? <div id='currentBookingBox'>
                <h1>Current Booking</h1>
                <hr />
                <CurrBooking bookedBy={car.bookedBy} />
            </div> : null}

            <div id='rentVroom'>
                <h1>Rent Vroom</h1>
                <p>Rentvroom Pvt Ltd.</p>
                <p>No: 296, 3rd Cross Rd, Jakkasandra, 1st Block, Koramangla</p>
                <p>Bengaluru, Karnataka 560034</p>
            </div>
            <div id='socialIcons'>
                {instagram}
                {twitter}
                {linkedin}
            </div>
            <footer id='footer'>
                <div id='footerFirstRow'>
                    <a>Home</a>
                    <a>Contact</a>
                    <a>About</a>
                </div>
                <div id='footerSecondRow'>
                    <p>Privacy Policy</p>
                    <p>Terms of Services</p>
                </div>
            </footer>
        </div>
    )
}

export default CarDetails
