import "./Palettes.css";
import Palette from "./Palette";
import { useState, useEffect, useContext } from "react";
import {ForecastContext} from "../../context/ForecastContext";


const Palettes = ({palettes}) => {
  return (
    <div className="grid">
      {palettes.map((palette) => (
        <Palette key={palette.id} palette= {palette }/>
      ))}
    </div>
  );
};

export default Palettes;
