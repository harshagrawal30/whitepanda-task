
import i10 from '../../assests/i10.png'
import ecosport from '../../assests/ecosport.png'
import XL6 from '../../assests/xl6.png'
import crv from '../../assests/cr-v.png'
let car1 = {
    id:1,
    name: 'Hyundai Grand i10',
    image: i10,
    color: 'white',
    seater: 4,
    rentPerDay: 350,
    vehNo: 'MP09C3944',
    isBooked: true,
    bookedBy:{
        name:'harsh',
        mobile:8945459494,
        issueDate:'10/01/2023',
        endDate:'15/01/2023'
    }
}
let car2 = {
    id:2,
    name: 'Ford EcoSport',
    image: ecosport,
    color: 'Deep Blue',
    seater: 4,
    rentPerDay: 1350,
    vehNo: 'MP09C3644',
    isBooked: false,
    bookedBy:{
    }
}
let car3 = {
    id:3,
    name: 'Maruti Suzuki XL6',
    image: XL6,
    color: 'Glossy Black',
    seater: 6,
    rentPerDay: 850,
    vehNo: 'MP09C3674',
    isBooked: false,
    bookedBy:{
    }
}
let car4 = {
    id:4,
    name: 'Honda Cr-V',
    image: crv,
    color: 'Blue',
    seater: 4,
    rentPerDay: 450,
    vehNo: 'MP09C3274',
    isBooked: false,
    bookedBy:{
    }
}
export const cars =[car1,car2,car3,car4];