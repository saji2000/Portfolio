import * as React from "react";

const Row = ({ spacing, children }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  return (
    <div>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {}),
          },
        });
      })}
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Row spacing={23}>
        <p>Pizza Margarita</p>
        <p>22$</p>
        <p>8:35 PM</p>
        <p>Hasan</p>
      </Row>
    </div>
  );
}
