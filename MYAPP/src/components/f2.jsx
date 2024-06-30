import React from "react";

const F2 = () => {
  const [count, setcount] = React.useState(0);
  return (
    <div>
      <p>The Count is {count}</p>
      <button onClick={() => setcount(count + 1)}>click</button>
    </div>
  );
};

export default F2;
