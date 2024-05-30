type ColorCatalogoProps = {
  colorIndex: number;
};

export const ColorCatalogo: React.FC<ColorCatalogoProps> = ({ colorIndex }) => {
  const colors = [
    [
      { code: "#dfe7e9", name: "Blanco" },
      { code: "#9facb2", name: "Gris" },
      { code: "#fcc411", name: "Amarillo" },
      { code: "#3086b5", name: "Azul" },
      { code: "#c25b52", name: "Rojo" },
      { code: "#287849", name: "Verde" },
    ], // Colores para la imagen 1
    [
      { code: "#e4e7ec", name: "Blanco" },
      { code: "#9baab3", name: "Gris" },
      { code: "#fec513", name: "Amarillo" },
      { code: "#8c372a", name: "Rojo" },
    ], // Colores para la imagen 3
    [
      { code: "#f3f5f4", name: "Blanco" },
      { code: "#e7ebea", name: "Blanco Ostra" },
      { code: "#ddd2be", name: "Marfil" },
      { code: "#e6d820", name: "Amarillo" },
      { code: "#ffc835", name: "Amarillo C." },
      { code: "#44c7db", name: "Azul cielo" },
      { code: "#15549d", name: "Azul" },
      { code: "#5ba240", name: "Verde Tilo" },
      { code: "#04a182", name: "Verde" },
      { code: "#0d722c", name: "Verde Grama" },
      { code: "#db7254", name: "Naranja" },
      { code: "#c21a26", name: "Rojo" },
      { code: "#48201e", name: "Caoba" },
      { code: "#79311f", name: "Marron Castana" },
      { code: "#b6c1c7", name: "Gris Claro" },
      { code: "#a1b3bd", name: "Gris" },
      { code: "#a1b3bd", name: "Gris Machete" },
      { code: "#0d0b0e", name: "Negro" },
    ], // Colores para la imagen 2
    // Agrega más arrays de colores si tienes más imágenes
  ];
  const colorSet = colors[colorIndex];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "auto", // Cambia a auto
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // Cambia a 3 columnas
          gap: "2px",
        }}
      >
        {colorSet.map((color, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                backgroundColor: color.code,
                width: "100px",
                height: "100px",
                borderRadius: "18px 0 18px 0", // Curva en las esquinas superior izquierda e inferior derecha
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                margin: "0 10px 10px 0", // Espacio a la derecha y abajo
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            ></div>
            <p style={{ color: "white", fontSize: "24px" }}>{color.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorCatalogo;
