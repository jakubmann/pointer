import { createSlice } from '@reduxjs/toolkit'

export const pointsSlice = createSlice({
    name: 'points',
    initialState: {
        value: 0,
        goal: 0,
        deeds: [
            {id: 0, name: 'add', points: 400, type: 'add'},
            {id: 1, name: 'remove', points: 100, type: 'remove'},
        ],
        history: []
    },
    reducers: {
        increment: state => {
            state.value++
        },
        decrement: state => {
            state.value--
        },
        createDeed: (state, action) => {
            //todo: name validation
            const id = state.deeds.length > 0 ? state.deeds[state.deeds.length-1].id + 1 : 0
            action.payload.id = id
            state.deeds.push(action.payload)
        },
        editDeed: (state, action) => {
            const data = action.payload.data
            console.log("data: ", data)
            const deed = state.deeds.find(d => d.id == action.payload.id)
            deed.name = data.name 
            deed.points = data.points
            deed.type = data.type
        },
        deleteDeed: (state, action) => {
            state.deeds = state.deeds.filter(d => d.id !== action.payload)
        },
        performDeed: (state, action) => {
            const toBePerformed = state.deeds.find(d => d.id === action.payload) 
            const points = parseInt(toBePerformed.points) 
            toBePerformed.type === 'add' ? state.value += points : state.value -= points
        },
        setNewGoal: (state, action) => {
            state.goal = action.payload
        },
        clearPoints: (state) => {
            state.history.push({points: state.value, goal: state.goal, date: Date()})
            state.value = 0
            console.log(state.history)
        }
    }
})

export const { increment, decrement, createDeed, editDeed, performDeed, deleteDeed, setNewGoal, clearPoints} = pointsSlice.actions
export default pointsSlice.reducer