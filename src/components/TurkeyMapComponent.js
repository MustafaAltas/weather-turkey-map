import React, { useEffect } from "react";
import TurkeyMap from "turkey-map-react";
import Tooltip from '@mui/material/Tooltip';
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { getBegin, getData } from "../redux/types";





function TurkeyMapComponent() {
  const dispatch = useDispatch();
  const {data,data_loading} = useSelector((state) => state.GetWeatherReducer);
  console.log(data);
  console.log(data_loading);
  const renderCity = (cityComponent, cityData) => ( 
    <Tooltip title={cityData.name} key={cityData.id}> 
        {cityComponent} 
    </Tooltip>
  );

  const handleData = async(id) => {
    await dispatch(getBegin())
    const Api_key = await process.env.REACT_APP_Apikey;
    const url = await `https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${Api_key}&units=metric&lang=tr`;
    await axios.get(url).then((data) => dispatch(getData(data.data))).catch((err) => console.log(err))
  }

  return (
    <div>
      <TurkeyMap onClick={({ id, name }) => handleData(id)} cityWrapper={renderCity}/>
    </div>
  );
}

export default TurkeyMapComponent;
