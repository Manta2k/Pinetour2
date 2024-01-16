import { useState } from "react";
export const Onoff = () => {
  const [isOn, setIsOn] = useState(false);
  const buttonStyle = {
    background: isOn ? "green" : "red",
    color: "white",
    width: "100px",
    height: "50px",
  };
  return (
    <button onClick={() => setIsOn(!isOn)} style={buttonStyle}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
};
