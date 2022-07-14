import React from "react";
import TurkeyMap from "turkey-map-react";
import Tooltip from '@mui/material/Tooltip';
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { getBegin, getData } from "../redux/types";
import ClockComp from "./ClockComp";
import {useNavigate} from "react-router-dom";




function TurkeyMapComponent() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.GetWeatherReducer);
  const navigate = useNavigate();




  const renderCity = (cityComponent, cityData) => ( 
    <Tooltip title={cityData.name} key={cityData.id}> 
        {cityComponent} 
    </Tooltip>
  );

  const handleData = async(id) => {
    await dispatch(getBegin())
    const Api_key = await process.env.REACT_APP_Apikey;
    const url = await `https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${Api_key}&units=metric&lang=tr`;
    await axios.get(url).then((data) => dispatch(getData(data.data))).catch((err) => console.log(err));
    await navigate("/info");
  }


  console.log(data)
  return (
    <div>
      <ClockComp/>
      <h1 style={{fontSize:"3rem"}}><span style={{color:"red"}}>Turkey</span> <span style={{color:"white"}}>Weather</span></h1>
      <TurkeyMap onClick={({ id, name }) => handleData(name)} cityWrapper={renderCity}/>
    </div>
  );
}

export default TurkeyMapComponent;
