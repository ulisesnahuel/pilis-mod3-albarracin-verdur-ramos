import "./Palettes.css";
import Palette from "./Palette";
import { useState, useEffect } from "react";

const Palettes = () => {
  const [palettes, setPalettes] = useState([]);
  // get data from localstorage and save in palettes state
  useEffect(() => {
    const getPalettes = () => {
      const palettes = JSON.parse(localStorage.getItem("palette"));
      setPalettes(palettes);
    };
    getPalettes();
  }, []);

  return (
    <div className="grid">
      {palettes.map((palette) => (
        <Palette key={palette.id} palette={palette} />
      ))}
    </div>
  );
};

export default Palettes;
