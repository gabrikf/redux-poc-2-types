import { configureStore } from '@reduxjs/toolkit'
import counterSlices from '../features/counter/counterSlices'

export default configureStore({
    reducer: {
        titles: counterSlices
    },
})