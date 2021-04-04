import { createSlice } from '@reduxjs/toolkit'

export const pointsSlice = createSlice({
    name: 'points',
    initialState: {
        value: 0,
        actions: [


            {name: 'add', points: 100, type: 'add'},
            {name: 'remove', points: 100, type: 'remove'},


        ],
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
            const points = parseInt(toBePerformed.points) 
            toBePerformed.type === 'add' ? state.value += points : state.value -= points
        }
    }
})

export const { increment, decrement, createAction, performAction } = pointsSlice.actions
export default pointsSlice.reducer