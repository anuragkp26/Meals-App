import { configureStore } from "@reduxjs/toolkit";

import favoriteSliceReducer from "./FavoriteStore"

export const Store = configureStore({
    reducer: {
        favoriteReducer: favoriteSliceReducer
    }
});