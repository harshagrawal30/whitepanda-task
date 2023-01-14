import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cars } from './initialState';

const initialState = cars;

export const carSlice = createSlice({
  name: 'cars',
  initialState,

  reducers: {
    bookCar: (state, action) => {
      state.forEach((car) => {
        if (car.id === action.payload.carId) {
          console.log(car.id)
          car.isBooked = true;
          console.log(action.payload.user)
          const data = action.payload.user
          car.bookedBy = Object.assign({}, action.payload.user)
        }
      })
      console.log(cars)
    }

  },
});

export const { bookCar } = carSlice.actions;
export const selectCars = (state) => state.cars;
export default carSlice.reducer;
