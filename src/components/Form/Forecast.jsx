import "./Form.css";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { getForecast } from "../../service";

const Forecast = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);


  //const handleSubmit  get api data and create object with id, name, latitud, longitud and save in localstorage
  const onSubmit = async (data) => {
    setIsLoading(true);
    const { name, latitud, longitud } = data;
    const forecast = await getForecast(latitud, longitud);
    const { temperature, windspeed } = forecast;
    const palette = {
      id: uuidv4(),
      name,
      latitud,
      longitud,
      temperature,
      windspeed,
    };
    const palettes = JSON.parse(localStorage.getItem("palette")) || [];
    palettes.push(palette);
    localStorage.setItem("palette", JSON.stringify(palettes));
    setIsLoading(false);
  };

  
  return (
    <div className="form-container">
      <span> New Forecast </span>
      {/* <form className="form" onSubmit={handleSubmit(onSubmit)}> */}
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form__input"
          type="text"
          placeholder="Nombre de la ubicacion..."
          // onChange={(e) => setName(e.target.value)}
          {...register("name", {
            required: "Debe ingresar el nombre de la ubicacion",
          })}
        />
        <p>{errors.name?.message}</p>
        <input
          className="input-form"
          type="text"
          placeholder="Latitude"
          // onChange={(e) => setLatitud(e.target.value)}
          {...register("latitude", {
            required: "Debe ingresar la latitud",
          })}
        />
        <p>{errors.latitude?.message}</p>
        <input
          className="input-form"
          type="text"
          placeholder="Longitude"
          // value={longitud}
          // onChange={(e) => setLongitud(e.target.value)}
          {...register("longitude", {
            required: "Debe ingresar la longitud",
          })}
        />
        <p>{errors.longitude?.message}</p>

        <button className="button" type='submit' >
          Crear Punto
        </button>
      </form>
    </div>
  );
};

export default Forecast;
