import React from "react";

const TestElement = function (props) {
  console.log(props);
  return (
    <div>
      <h1>
        The sum of {props.num1} and {props.num2} are {props.num1 + props.num2}
      </h1>
    </div>
  );
};

export default TestElement;
