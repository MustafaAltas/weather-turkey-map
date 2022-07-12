import { configureStore } from "@reduxjs/toolkit";
import GetWeatherReducer from "./reducers/GetWeatherReducer";

const store = configureStore({
    reducer:{
        GetWeatherReducer:GetWeatherReducer
    }
});

export default store;