import { Link } from "react-router-dom";
import imagen1 from "./assets/1.png";
import imagen2 from "./assets/6.png";
import imagen3 from "./assets/4.png";

export const Image = () => {
  return (
    <div>
      <Link to="/colors/0">
        <img src={imagen1} alt="Imagen 1" />
      </Link>
      <Link to="/colors/1">
        <img src={imagen2} alt="Imagen 2" />
      </Link>
      <Link to="/colors/2">
        <img src={imagen3} alt="Imagen 3" />
      </Link>
    </div>
  );
};

export default Image;
