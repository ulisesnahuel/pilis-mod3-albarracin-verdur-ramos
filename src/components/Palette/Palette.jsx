import "./Palette.css";
import { AiOutlineClose } from "react-icons/ai";

const Palette = ({ palette }) => {
  const { id, place, latitude, longitude, temperature, windspeed } = palette;

  const handleDelete = (id) => {
    const palettes = JSON.parse(localStorage.getItem("forecast"));
    const newPalettes = palettes.filter((palette) => palette.id !== id);
    localStorage.setItem("forecast", JSON.stringify(newPalettes));
    window.location.reload();
  };

  return (
    <div id="weather_wrapper">
      <div className="weatherCard">
        <div className="currentTemp">
          <span className="temp">{temperature}&deg;</span>
          <span className="location">{place}</span>
        </div>
        <div className="currentWeather">
          <span className="delete">
            <AiOutlineClose className="icon" onClick={() => handleDelete(id)} />
          </span>
          <span className="conditions">&#xf00d;</span>
          <div className="info">
            <span className="wind">{windspeed}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Palette;
