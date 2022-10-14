import "./Palette.css";
import { AiOutlineClose } from "react-icons/ai";
//import { ForecastContext } from "../../context/ForecastContext";

const Palette = ({ palette }) => {
  //const { forecast, setForecast } = useContext(ForecastContext);
  const { id, place, latitude, longitude, temperature, windspeed } = palette;

  
  const handleDelete = (id) => {
    const palettes = JSON.parse(localStorage.getItem("forecast"));
    const newPalettes = palettes.filter((palette) => palette.id !== id);
    localStorage.setItem("forecast", JSON.stringify(newPalettes));
    window.location.reload();
  };

  return (
    <div className="palette-container">
      <div className="delete">
        <AiOutlineClose
          className="delete-icon"
          onClick={() => handleDelete(id)}
        />
      </div>
      <div className="palette">
        <p>Cuidad: {place}</p>
        <p>Latitud: {latitude}</p>
        <p>Longitud: {longitude}</p>
        <p>Temperatura: {temperature}</p>
        <p>Viento: {windspeed}</p>
      </div>
    </div>
  );
};

export default Palette;
