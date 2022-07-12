import { GET_WEATHER_BEGIN, GET_WEATHER_DATA } from "./actions"

export const getData = (payload) => {
    return{
        type:GET_WEATHER_DATA,
        payload : payload
    }
}

export const getBegin = () => {
    return{
        type:GET_WEATHER_BEGIN
    }
}