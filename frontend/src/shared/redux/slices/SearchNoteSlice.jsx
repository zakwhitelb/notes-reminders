// redux/slices/SearchNoteSlice.js
import { createSlice } from '@reduxjs/toolkit';

const SearchNoteSlice = createSlice({
    name: 'search_note',
    initialState: {
        value: "", // Default value for testing
    },
    reducers: {
        SearchNoteName: (state, action) => {
            state.value = action.payload; // Update the state with the payload
        },
        ClearSearch: (state) => {
            state.value = ""; // Clear the value when invoked
        },
    },
});

export const { SearchNoteName, ClearSearch } = SearchNoteSlice.actions;

export default SearchNoteSlice.reducer;
