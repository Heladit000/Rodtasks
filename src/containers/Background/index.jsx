import React, { useEffect, useState } from "react";

import CompleteColor from "./components/CompleteColor";
import "./style/Background.css";

const Background = () => {
  const [backgroundImage, setBackgroundImage] = useState();

  useEffect(() => {
    fetch(
      `https://picsum.photos/${document.body.clientWidth}/${document.body.clientHeight}`
    )
      .then((response) => response.blob())
      .then((imageBlob) => {
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setBackgroundImage(imageObjectURL);
      });
  }, []);
  return (
    <div className="background">
      <img src={backgroundImage} alt="" />
      <CompleteColor />
    </div>
  );
};

export default Background;
