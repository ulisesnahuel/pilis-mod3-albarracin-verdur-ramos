import { useContext,  useState } from "react";
import { useForm } from "react-hook-form";
import { getForecast } from "../../service";
import { useNavigate } from "react-router-dom";
import { ForecastContext } from "../../context/ForecastContext";
import "./Forecast.css";
// importar uuidv4
import { v4 as uuidv4 } from "uuid";

const Forecast = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { forecast, setForecast } = useContext(ForecastContext);

  //se crear el objeto newForecast
  const onSubmit = async (data) => {
    setIsLoading(true);
    const { place, latitude, longitude } = data;
    const info = await getForecast(latitude, longitude);
    const { current_weather } = info;
    const forecastNew = {
      //creamos un id para cada objeto unico para cada objeto con import 
      //de la libreria uuid
      id: uuidv4(),
      place: place,
      latitude: latitude,
      longitude: longitude,
      temperature: current_weather.temperature,
      windspeed: current_weather.windspeed,
    };
    // se guardar en localstorage newForecast
    setForecast([...forecast, forecastNew]);

    const forecasts = JSON.parse(localStorage.getItem("forecast")) || [];
    localStorage.setItem(
      "forecast",
      JSON.stringify([...forecasts, forecastNew])
    );
    setIsLoading(false);

    navigate("/");
  };

  return (
    <div className="login-box">
      <h2> Nuevo punto (forecast) </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="user-box">
          <input
            type="text"
            placeholder="Nombre de la ubicacion..."
            {...register("place", {
              required: "falta nombre",
            })}
          />
          <label>Nombre</label>
          <p>{errors.place?.message}</p>
        </div>
        <div className="user-box">
          <input
            type="text"
            placeholder="Latitud..."
            {...register("latitude", {
              required: "ingrese latitud",
            })}
          />
          <label>Latitud</label>
          <p>{errors.latitude?.message}</p>
        </div>
        <div className="user-box">
          <input
            type="text"
            placeholder="Longitud..."
            {...register("longitude", {
              
            })}
          />
          <label>Longitud</label>
          <p>{errors.longitude?.message}</p>
        </div>
        <button className="button" type="submit">
          Crear Punto
        </button>
      </form>
    </div>
  );
};

export default Forecast;
