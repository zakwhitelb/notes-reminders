// redux/slices/SearchNoteSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialTheme = localStorage.getItem("show_by") || "end_time";

localStorage.setItem('show_by', initialTheme);

const ShowBySlice = createSlice({
    name: 'show_by',
    initialState: {
        value: "end_time", // Default value for testing
    },
    reducers: {
        ToggleClickShowBy: (state, actions) => {
            state.value = actions.payload;
            
            localStorage.setItem("show_by", state.value);
        },
    },
});

export const { ToggleClickShowBy } = ShowBySlice.actions;

export default ShowBySlice.reducer;
