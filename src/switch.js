import React, { useState } from "react";
import Switch from "react-switch";
import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./App";

export function MaterialDesignSwitch() {
  const { toggleTheme } = useContext(ThemeContext);

  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    toggleTheme();
  };

  return (
    <div className="example">
      <label>
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
        />
      </label>
      <p>
        <span>{checked ? "Light" : "Dark"}</span> mode
      </p>
    </div>
  );
}
