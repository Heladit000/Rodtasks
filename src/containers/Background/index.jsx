import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import BackgroundPanel from "./components/BackgroundPanel";
import ProgressColor from "./components/ProgressColor";
import "./style/Background.scss";

const imageAPIURL = `https://picsum.photos/${document.body.clientWidth}/${document.body.clientHeight}`;

const Background = () => {
  const [backgroundImage, setBackgroundImage] = useState();

  useEffect(() => {
    //get image
    fetch(imageAPIURL)
      .then((response) =>
        //conver image to binary
        response.blob()
      )
      .then((imageBlob) => {
        //create image
        const imageObjectURL = URL.createObjectURL(imageBlob);

        setBackgroundImage(imageObjectURL);
      });
  }, []);

  return createPortal(
    <div className="background">
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="bg_image"
          className="background__image"
        />
      )}

      {/* tasks progress */}
      <ProgressColor />

      <BackgroundPanel />
    </div>,
    document.getElementById("background")
  );
};

export default Background;
