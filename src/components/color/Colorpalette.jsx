import React, { useState } from "react";
import "./color-palette.css";
import { MdOutlineColorLens } from "react-icons/md";

const colors = [
  "default-color",
  "color-1",
  "color-2",
  "color-3",
  "color-4",
  "color-5",
  "color-6",
  "color-7",
  "color-8",
  "color-9",
];
const Colorpalette = ({ updateColor }) => {
  const [showColors, setShowColors] = useState(false);
  return (
    <div>
      <div className="color-palette-container">
        <MdOutlineColorLens
          className="color-palette-icon"
          onClick={() => setShowColors((prev) => !prev)}
        />

        {showColors && (
          <div className="color-wrapper color-palette">
            {colors.map((current_color) => {
              return (
                <div
                  key={current_color}
                  className={`colors ${current_color}`}
                  onClick={() => {
                    updateColor(current_color);
                  }}
                ></div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Colorpalette;
