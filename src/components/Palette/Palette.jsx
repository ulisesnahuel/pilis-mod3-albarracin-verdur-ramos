import "./Palette.css";
import { AiOutlineClose } from "react-icons/ai";

const Palette = ({palette}) => {

  const { id, name, latitude, longitude, temperature, windspeed } = palette;
    
  const handleDelete = (id) => {
    const palettes = JSON.parse(localStorage.getItem("palette"));
    const newPalettes = palettes.filter((palette) => palette.id !== id);
    localStorage.setItem("palette", JSON.stringify(newPalettes));
    window.location.reload();
  };
  
  return (
      // <ForecastContext.Provider value={{ paleta, setPaleta }}>
        <div className="palette-container">
          <div className="delete">
            <AiOutlineClose className="delete-icon" onClick={() => handleDelete(id) } />
          </div>
          <div className="palette">
            <p>Cuidad: {name }</p>
            <p>Latitud: {latitude}</p>
            <p>Longitud: {longitude}</p>
            <p>Temperatura: {temperature}</p>
            <p>Viento: {windspeed}</p>
          </div>
        </div>
      // </ForecastContext.Provider>
    );
  };


export default Palette;
