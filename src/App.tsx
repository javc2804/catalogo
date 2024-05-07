import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { ColorCatalogo } from "./ColorCatalogo";
import { useEffect, useState } from "react";
import Image from "./Image";
import Logo from "./Logo";

export const App = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
        {showLogo ? <Logo /> : null}
        {!showLogo ? (
          <Routes>
            <Route path="/colors/:index" element={<ColorCatalogoWrapper />} />
            <Route path="/" element={<Image />} />
          </Routes>
        ) : null}
      </div>
    </Router>
  );
};

const ColorCatalogoWrapper = () => {
  const { index } = useParams();
  return <ColorCatalogo colorIndex={parseInt(index)} />;
};
