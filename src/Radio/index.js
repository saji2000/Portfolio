import * as React from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  // Use React.Children.map and React.cloneElement to clone the children
  // and pass the correct props to each RadioOption
  const RadioOptions = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      onChange: onChange,
      checked: child.props.value === selected,
    })
  );

  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  const handleChange = (e) => {
    const newValueSelected = e.target.value;
    onChange(newValueSelected); // Call the onChange prop with the new value
  };

  return (
    <div className="RadioOption">
      <input
        id={value}
        type="radio"
        name="radio-group" // Changed to a common name for all radio buttons in the group
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
