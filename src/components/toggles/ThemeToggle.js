import { useState } from "react";
import "./../../assets/styles/global.css";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    const newTheme = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <label className="ui-switch">
      <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
  );
}

export default ThemeToggle;
