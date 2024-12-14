import { createSlice } from '@reduxjs/toolkit';

// Retrieve the stored value from localStorage or default to "all_notes"
const initialMenuClickedButton = localStorage.getItem("menu_clicked_button") || "all_notes";
localStorage.setItem('menu_clicked_button', initialMenuClickedButton);

const MenuClickedButtonSlice = createSlice({
    name: 'menu_clicked_button',
    initialState: {
        value: initialMenuClickedButton,
    },
    reducers: {
        ChangeMenuClickedButton: (state, action) => {
            state.value = action.payload;

            // Update localStorage with the new value
            localStorage.setItem('menu_clicked_button', action.payload);
        },
    },
});

// Export the reducer action
export const { ChangeMenuClickedButton } = MenuClickedButtonSlice.actions;

export default MenuClickedButtonSlice.reducer;
