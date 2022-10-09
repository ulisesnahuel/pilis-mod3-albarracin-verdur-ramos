
import "./Form.css";
import { Palette } from "../Palette/Palette";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import {getForecast} from '../../service.js'


const Form = () => {
  // const {setCurrentForm} = useContext(UserContext)
  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const navigate = useNavigate()

  const [palette, setPalette] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [latitud, setLatitud] = useState();
  const [longitud, setLongitud] = useState();
  const onSubmit = (data) => {
    // localStorage.setItem('currentUser', JSON.stringify(data))
    // setCurrentUser(data)
    // navigate('/')
  };

  //const handleSubmit create object with id, name, latitud, longitud and save in localstorage
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPalette = {
      id: uuidv4(),
      name: name,
      latitud: latitud,
      longitud: longitud,
      temperature: forecast.temperature,
      windspeed: forecast.current_weather.windspeed,
    };
    setPalette([...palette, newPalette]);
    setName("");
    setLatitud("");
    setLongitud("");
  };
  const [forecast, setForecast] = useState(() => {
    setIsLoading(true);
    getForecast(latitud, longitud).then((data) => {
      setForecast(data);
      setIsLoading(false);
    });
    const localData = localStorage.getItem("NewPalette");
    return localData ? JSON.stringify(localData) : [];
  });

  return (
    <div className="form-container">
      <span> New Forecast </span>
      {/* <form className="form" onSubmit={handleSubmit(onSubmit)}> */}
      <form className="form">
        <input
          className="form__input"
          type="text"
          placeholder="Nombre de la ubicacion..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          // {...register("name", {
          //   required: "Debe ingresar el nombre de la ubicacion",
          // })}
        />
        {/* <p>{errors.name?.message}</p> */}
        <input
          className="input-form"
          type="text"
          placeholder="Latitud"
          value={latitud}
          onChange={(e) => setLatitud(e.target.value)}
          // {...register("latitud", {
          //   required: "Debe ingresar la latitud",
          // })}
        />
        {/* <p>{errors.username?.message}</p> */}
        <input
          className="input-form"
          type="text"
          placeholder="Longitud"
          value={longitud}
          onChange={(e) => setLongitud(e.target.value)}
          // {...register("longitud", {
          //   required: "Debe ingresar la longitud",
          // })}
        />
        {/* <p>{errors.username?.message}</p> */}
        {/* <button className="button" onClick={handleClick}>Crear</button> */}
        <button className="button" onClick={handleSubmit()}>
          Crear
        </button>
      </form>
    </div>
  );
};

export default Form;
