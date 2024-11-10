import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


// const URL = "https://fakestoreapi.com/products";


export const fetchData = createAsyncThunk("user",
    async () => {
        const response = await fetch('new_collections.json');
        const data = await response.json();
        console.log(data);
        try {
            return data;
        } catch (error) {
            console.log(error);
        }
    }
)
// const pending = createAction(userData.pending);
// const fulfilled = createAction(userData.fulfilled);
// const rejected = createAction(userData.rejected);
    // export const fetchData =()=>
    // {
    //     return data_product
    // }
    // fetchData();
// action creator
const userSlice = createSlice({
    name: "userSlice",
    initialState : {
        loading: false,
        data : [],
        // data_product : [],
        error : null,
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
                state.error = null
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false
                state.data = []
                // state.error = action.error.message
                state.error = action.payload
            })
    }
})

export default userSlice.reducer;