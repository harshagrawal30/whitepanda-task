import React from 'react'
import './css/currBooking.css'
function CurrBooking({ bookedBy }) {
    return (
        <div id='scrollDiv'>
            <div className='currentBookingBox' id='currentBookingBoxHeader'>
                <h4>Name</h4>
                <h4>PHONE NUMBER</h4>
                <h4>Issue Date</h4>
                <h4>End Date</h4>
            </div>
            <div className='currentBookingBox'>
                <h4>{bookedBy.name}</h4>
                <h4>{bookedBy.mobile}</h4>
                <h4>{bookedBy.issueDate}</h4>
                <h4>{bookedBy.endDate}</h4>
            </div>
        </div>
    )
}

export default CurrBooking
