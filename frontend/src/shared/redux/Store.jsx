// System
import { configureStore } from '@reduxjs/toolkit';

// Slices
import ThemeReducer from "./slices/ThemeSlice";
import SearchNoteName from './slices/SearchNoteSlice';
import AuthentificationSlice from './slices/AuthentificationSlice';
import MenuClickedButtonSlice from "./slices/MenuClickedButtonSlice";
import ShowBySlice from "./slices/ShowBySlice";

const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    search_note: SearchNoteName,
    authentification_status: AuthentificationSlice,
    menu_clicked_button: MenuClickedButtonSlice,
    show_by: ShowBySlice,
  },
});

export default store;
