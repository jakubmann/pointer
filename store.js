import { configureStore } from '@reduxjs/toolkit'
import pointsReducer from './slices/pointsSlice'
import inputReducer from './slices/inputSlice'

const reducer = {
    points: pointsReducer,
    input: inputReducer
}

export default configureStore({
    reducer
})