import "./Palettes.css";
import Palette from "./Palette";

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
