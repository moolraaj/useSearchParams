import { configureStore } from '@reduxjs/toolkit'
import addReducer from '../slice/addSlice' 
const Store=configureStore({
    reducer:{
        add:addReducer
    }
})

export default Store