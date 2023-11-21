import "./Styles.css";
import { useTheme } from "../Components/ThemeContext";

const Switch = () => {
  const { theme } = useTheme();
  return (
    <label className="switch">
      <input type="checkbox" checked={theme === "light"} />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
