import "./Forecast.css";
import { v4 as uuidv4 } from "uuid";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {getForecast} from "../../service"
// import { ForecastContext } from "../../context/ForecastContext";  

const Forecast = () => {

  const { register, handleSubmit , formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  // const [forecast, setForecast] = useContext(ForecastContext);

  // buscar pronostico por latitud y longitud
  const onSubmit = async (data) => {
    //Event.preventDefault();
    setIsLoading(true);
    const { place, latitude, longitude } = data;
    const info = await getForecast(latitude, longitude);
    const { current_weather } = info;
    const newForecast = {
      id: uuidv4(),
      place: place,
      latitude: latitude,
      longitude: longitude,
      temperature: current_weather.temperature,
      windspeed: current_weather.windspeed,
    };
    //guardar en localstorage newForecast
    const forecasts = JSON.parse(localStorage.getItem("forecast")) || [];
      localStorage.setItem("forecast", JSON.stringify([...forecasts, newForecast]));
      setIsLoading(false);
    }   
    
    useEffect (() => {
      
    }, [onSubmit]);
  

  //were add new palette render
  return (
    <div className="form-container">
      <span> New Forecast </span>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form__input"
          type="text"
          placeholder="Nombre de la ubicacion..."
          {...register("place", {
            required: "Debe ingresar el nombre de la ubicacion",
          })}
        />
        <p>{errors.place?.message}</p>
        <input
          className="input-form"
          type="text"
          placeholder="Latitude"
          {...register("latitude", {
            required: "Debe ingresar la latitud",
          })}
        />
        <p>{errors.latitude?.message}</p>
        <input
          className="input-form"
          type="text"
          placeholder="Longitude"
          {...register("longitude", {
            required: "Debe ingresar la longitud",
          })}
        />
        <p>{errors.longitude?.message}</p>

        <button className="button" type="submit">
          Crear Punto
        </button>
      </form>
    </div>
  );
};

export default Forecast;
