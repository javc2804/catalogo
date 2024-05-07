import logoImage from "./assets/logo.jpg";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        src={logoImage}
        alt="Logo"
        style={{ width: "600px", height: "300px" }}
      />
    </div>
  );
};

export default Logo;
