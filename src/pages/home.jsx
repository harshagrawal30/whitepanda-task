import React from 'react'
import img1 from '../assests/img1.png'
import './css/home.css'
import CarCard from '../components/carCard'
import { selectCars } from '../app/redux/carsReducer'
import { useSelector } from 'react-redux'
import { instagram, linkedin, twitter } from '../assests/socialMediaIcons'
function Home() {
    const cars = useSelector(selectCars)
    return (
        <div>
            <img src={img1} alt='img1' id='Clogo' />
            <div>
                <h1 className='moveLeft'>Cars For Rent</h1>
            </div>
            <div>
                <div id='listHeader'>
                    <h3>Car Details</h3>
                    <h3>Rent Per Day</h3>
                    <><span></span></>
                </div>
                <div>
                    {cars.map((car) => {
                        return (
                            <CarCard car={car} />
                        )
                    })}
                </div>
            </div>
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
                    <p>Home</p>
                    <p>Contact</p>
                    <p>About</p>
                </div>
                <div id='footerSecondRow'>
                    <p>Privacy Policy</p>
                    <p>Terms of Services</p>
                </div>
            </footer>
        </div>
    )
}

export default Home
