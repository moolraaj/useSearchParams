import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState={
    users:[]
}
export const AddSlice=createSlice({
    name:'add',
    initialState,
    reducers:{
        addUser:((state,action)=>{
            let data={
                id:nanoid(),
                name:action.payload
            }
            state.users.push(data)
        })
         
    },
   
})

export const {addUser} =AddSlice.actions
export default AddSlice.reducer