import { createSlice } from '@reduxjs/toolkit';

// Retrieve the stored value from localStorage or default to "all_notes"
const initialToken = localStorage.getItem("token") || null;
initialToken !== null && localStorage.setItem('token', initialToken);

const TokenSlice = createSlice({
    name: 'token',
    initialState: {
        value: initialToken,
    },
    reducers: {
        setToken: (state, action) => {
            state.value = action.payload;

            // Update localStorage with the new value
            localStorage.setItem('token', action.payload);
        },
    },
});

// Export the reducer action
export const { setToken } = TokenSlice.actions;

export default TokenSlice.reducer;
