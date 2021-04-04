import { createSlice } from '@reduxjs/toolkit'

export const pointsSlice = createSlice({
    name: 'points',
    initialState: {
        value: 0,
        actions: [],
    },
    reducers: {
        increment: state => {
            state.value++
        },
        decrement: state => {
            state.value--
        },
        createAction: (state, action) => {
            state.actions.push(action.payload)
        },
        performAction: (state, action) => {
            const toBePerformed = state.actions.find(a => a.name === action.payload) 
            state.value += parseInt(toBePerformed.points)
        }
    }
})

export const { increment, decrement, createAction, performAction } = pointsSlice.actions
export default pointsSlice.reducer