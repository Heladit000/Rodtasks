import React from "react";
import ContentLoader from "react-content-loader";

const TaskLoader = () => {
  return (
    <ContentLoader
      speed={2}
      height="4em"
      width="100%"
      backgroundColor="#2c2c2c"
      foregroundColor="#353535"
    >
      <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
    </ContentLoader>
  );
};

export default TaskLoader;
