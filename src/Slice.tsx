import { createSlice } from "@reduxjs/toolkit";
import { User } from "./interface/User";

const initialState: {data:User} = {
    data: {
        total_count: 0,
        incomplete_results: false,
        items: [],
    },
}


const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
    },

});

export const { setData } = slice.actions;

export default slice.reducer;