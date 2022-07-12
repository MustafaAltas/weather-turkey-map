import { GET_WEATHER_BEGIN, GET_WEATHER_DATA } from "../actions";

const initialValue = { data: [],data_loading : true };

const GetWeatherReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_WEATHER_BEGIN:
        return{
            ...state,
            data_loading:false
        }
    case GET_WEATHER_DATA:
      return{
        ...state,
        data : action.payload
      }

    default:
      return state
  }
};

export default GetWeatherReducer;
