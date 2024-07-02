import { useEffect, useState } from "react";

const Color = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    if (colorType === "hex") {
      handleHexColor();
    } else {
      handleRgbColor();
    }
  }, [colorType]);

  const utility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleHexColor = () => {
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"];
    let has = "#";

    for (let i = 0; i < 6; i++) {
      has += num[utility(num.length)];
    }

    setColor(has);
  };

  const handleRgbColor = () => {
    const r = utility(256);
    const g = utility(256);
    const b = utility(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  const handleHexClick = () => {
    setColorType("hex");
    handleHexColor();
  };

  const handleRgbClick = () => {
    setColorType("rgb");
    handleRgbColor();
  };

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
      >
        <button onClick={handleHexClick}>HEX Color</button>
        <button onClick={handleRgbClick}>RGB Color</button>
        <button onClick={colorType === "hex" ? handleHexColor : handleRgbColor}>
          Random Color
        </button>
        <div>
          <span className="span">
            {colorType === "hex" ? "HEX Color" : "RGB Color"}
          </span>
        </div>
        <div className="color">{color}</div>
      </div>
    </>
  );
}

export default Color;