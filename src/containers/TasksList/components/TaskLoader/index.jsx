import React from "react";
import Contentloader from "react-content-loader";

const Taskloader = () => {
  return (
    <Contentloader
      speed={2}
      height="3em"
      width="100%"
      backgroundColor="#2c2c2c"
      foregroundColor="#353535"
      style={{opacity: "50%"}}
    >
      <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
    </Contentloader>
  );
};

export default Taskloader;
