import { createSlice } from "@reduxjs/toolkit";
import { User } from "./interface/User";

const initialState: {data:User,searchTerms:string} = {
    data: {
        total_count: 0,
        incomplete_results: false,
        items: [],
    },
    searchTerms: '',
}


const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setSearchTerms: (state, action) => {
            state.searchTerms = action.payload;
        }
    },

});

export const { setData ,setSearchTerms} = slice.actions;

export default slice.reducer;