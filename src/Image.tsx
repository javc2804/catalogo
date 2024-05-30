import { Link } from "react-router-dom";
import imagen1 from "./assets/1.png";
import imagen2 from "./assets/6.png";
import imagen3 from "./assets/4.png";

export const Image = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Link to="/colors/0" style={{ margin: "10px" }}>
        <img src={imagen1} alt="Imagen 1" style={{ maxWidth: "100%" }} />
      </Link>
      <Link to="/colors/1" style={{ margin: "10px" }}>
        <img src={imagen2} alt="Imagen 2" style={{ maxWidth: "100%" }} />
      </Link>
      <Link to="/colors/2" style={{ margin: "10px" }}>
        <img src={imagen3} alt="Imagen 3" style={{ maxWidth: "100%" }} />
      </Link>
    </div>
  );
};

export default Image;
