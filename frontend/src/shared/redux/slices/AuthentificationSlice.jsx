import { createSlice } from '@reduxjs/toolkit';

// Convert the stored value to a boolean
const initialAuthentificationStatus = localStorage.getItem("authentification_status") === "true";
localStorage.setItem('authentification_status', String(initialAuthentificationStatus));

const AuthentificationSlice = createSlice({
    name: 'authentification_status',
    initialState: {
        value: initialAuthentificationStatus,
    },
    reducers: {
        Login: (state) => {
            state.value = "true";

            // Update localStorage
            localStorage.setItem('authentification_status', String(state.value));
        },
        Logout: (state) => {
            state.value = "false";

            // Update localStorage
            localStorage.setItem('authentification_status', String(state.value));
        },
        DeleteAccount: (state) => {
            state.value = "false";
            localStorage.removeItem('authentification_status');
        },
    },
});

export const { Login, Logout, DeleteAccount } = AuthentificationSlice.actions;

export default AuthentificationSlice.reducer;
