import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

function Info() {
  const infoSelector = useSelector((state) => state.GetWeatherReducer);
  console.log(infoSelector);
  const navigate = useNavigate();



  return (
    <div className="container  my-4 border-4" style={{ height: "90%" }}>
      <div className="row ">
        <div className="col-12">
          <button
            className="btn btn-success p-2 float-start"
            onClick={() => navigate("/")}
          >
            <BsFillArrowLeftSquareFill /> Back To Home
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm m-4">
          <h5>Hissedilen</h5> {infoSelector?.data.main.feels_like} °C
        </div>
        <div className="col-sm m-4">
          <h5>En Yüksek </h5> {infoSelector?.data.main.temp_max} °C
        </div>
        <div className="col-sm m-4">
          <h5>En Düşük </h5> {infoSelector?.data.main.temp_min} °C
        </div>
        <div className="col-sm m-4">
          <h5>Nem</h5> %{infoSelector?.data.main.humidity}
        </div>
        <div className="col-sm m-4">
          <h5>Basınç</h5> {infoSelector?.data.main.pressure}
        </div>
      </div>
      <div className="row">
        <div className="col-sm m-4">
          <h5>Gün Doğumu</h5> 0
          {new Date(
            Number(String(infoSelector?.data.sys.sunrise) + "000")
          ).getHours()}
          :
          {new Date(
            Number(String(infoSelector?.data.sys.sunrise) + "000")
          ).getMinutes()}
          :
          {new Date(
            Number(String(infoSelector?.data.sys.sunrise) + "000")
          ).getSeconds()}
        </div>
        <div className="col-sm m-4">
          <h5>Gün Baatımı</h5>{" "}
          {new Date(
            Number(String(infoSelector?.data.sys.sunset) + "000")
          ).getHours()}
          :
          {new Date(
            Number(String(infoSelector?.data.sys.sunset) + "000")
          ).getMinutes()}
          :
          {new Date(
            Number(String(infoSelector?.data.sys.sunset) + "000")
          ).getSeconds()}
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <h1>
            {infoSelector?.data.name}{" "}
            <sup>{infoSelector?.data.sys.country}</sup>
          </h1>
          <span>
          <h2>
            {infoSelector?.data.weather[0].description.charAt(0).toUpperCase() +
              infoSelector?.data.weather[0].description.slice(1)}
          </h2>
          </span>
          <img
            src={`http://openweathermap.org/img/wn/${infoSelector?.data.weather[0].icon}.png`}
            alt=""
            style={{ width: "150px", margin: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
