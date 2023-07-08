import React from "react";
import "./Slider.module.css";

function Slider({ currentValue = 0, min = 0, max = 100, onChange }) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current.style.background = `linear-gradient(to right, #ffff 0%, #ffff ${
      ((currentValue - min) / (max - min)) * 100
    }%, #595560 ${((currentValue - min) / (max - min)) * 100}%, #595560 100%)`;
  });

  return (
    <div style={{ display: "flex", justifyContent: "center", marginBlock: 24 }}>
      <div style={{ display: "flex", width: 600 }}>
        <input
          style={{ width: 600 }}
          ref={ref}
          step={1}
          type="range"
          min={0}
          max={max}
          value={currentValue.toFixed(0)}
          className="slider"
          id="myRange"
          onInput={(e) => {
            const value = e.target.value;
            if (onChange && typeof onChange === "function") {
              onChange(value);
            }
          }}
        />
      </div>
    </div>
  );
}

export default Slider;
