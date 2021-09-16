import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
    actived: {}, 
        module: [
            {
                name: 'opa1', 
                id: 1
            },
            {
                name: 'opa2',
                id: 2
            }
        ]
    },
    reducers: {
        current: (state, action) =>   {
            state.actived = action.payload      
        }
    }
})

export const {current} = counterSlice.actions

export default counterSlice.reducer

