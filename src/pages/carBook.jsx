import React, { useReducer, useState } from 'react'
import carBookImg from '../assests/carBookImage.png'
import './css/carBook.css'
import { useNavigate, useLocation } from 'react-router-dom'
import img1 from '../assests/img1.png'
import { bookCar } from '../app/redux/carsReducer';
import { useDispatch } from 'react-redux';
import CarBookPopUp from '../components/carBookPopUp';
function CarBook() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const car = location.state.car;
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState(0)
    const [issueDate, setIssueDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [showPopUp, setShowPopUp] = useState(false)
    const [booked, setBooked] = useState(false)
    const date = new Date();
    const today = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)) + '-' + date.getDate();


    const submit = (e) => {
        e.preventDefault();
        console.log(parseInt(mobile))
        if (parseInt(mobile) < 6000000000 || mobile.length !== 10) {
            alert("Invalid Phone number")
            return
        }
        if (endDate < issueDate) {
            alert('Invalid Dates')
            return
        }

        try {
            dispatch(bookCar({ carId: car.id, user: { name: name, mobile: mobile, issueDate: issueDate, endDate: endDate } }))
            setBooked(true)
        }
        catch { }
        setShowPopUp(true)
    }
    return (
        <div>
            {showPopUp ? <CarBookPopUp booked={booked} car={car} dates={{ issueDate: issueDate, endDate: endDate }} /> : null}
            <div id='carBookContainer'>
                <img id='carBookBgImg' src={carBookImg} />
                <div id='carBookBox'>
                <div id='bookingDetailsHeaderMobile'>
                <img src={img1} alt='img1' id='Clogo' />
                    <h1>Booking Details</h1>
                    </div>
                    <div id='bookingDetailsHeaderDesktop'>
                        {/* <><span></span></> */}
                    <h1 id='bookDetailHeading'>Booking details</h1>
                    <img src={img1} alt='img1' id='Clogo' />
                    </div>
                    <form onSubmit={submit}>
                        <div>
                            <div id='carBookContent'>
                                <div className='inputBox'>
                                    <label for='name'>Name: </label>
                                    <input type='text' onChange={(e) => setName(e.target.value)} required placeholder='name' />
                                </div>
                                <div className='inputBox'>
                                    <label for='mobile'>Phone Number: </label>
                                    <input type='text' onChange={(e) => setMobile(e.target.value)} required placeholder='+91 ' />
                                </div>
                            </div>
                            <div id='carBookContent'>
                                <div className='inputBox'>
                                    <label for='issueDate'>Issue Date: </label>
                                    <input type='date' min={today} onChange={(e) => setIssueDate(e.target.value)} required placeholder='DD/MM/YYYY' />
                                </div>
                                <div className='inputBox'>
                                    <label for='endDate'>End Date: </label>
                                    <input type='date' min={issueDate} onChange={(e) => setEndDate(e.target.value)} required placeholder='DD/MM/YYYY' />
                                </div>
                            </div>
                            <div id='carBookContentButtons'>
                                <div className='inputBox'>
                                    <button id='backButton' type='button' onClick={() => navigate(-1)}>Back</button>
                                </div>
                                <div className='inputBox'>
                                    <button id='book' type='submit'>Book Car</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CarBook
