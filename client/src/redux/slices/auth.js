import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const registration = createAsyncThunk("auth-registration", async (params) => {
    const {data} = await axios.post('/register', params)
    return data;
})
const initialState = {
  userEmail: null,
 status: "loading",
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.userEmail = null
        },
    },

    extraReducers: {
        []
    }
})
