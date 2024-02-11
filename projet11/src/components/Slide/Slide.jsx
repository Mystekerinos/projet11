import React, { useState } from "react";
import "./Slide.scss";
import IconChevron from "../Icons/Chevron";

const Slide = ({ totalNumberOfPhotos }) => {
  const [index, setIndex] = useState(0);

  const previousSlide = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(totalNumberOfPhotos.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalNumberOfPhotos.length);
  };

  const photos = totalNumberOfPhotos;
  console.log("photos", photos);

  return (
    <div className="photo-box">
      <div className="counter">{`${index + 1} / ${
        totalNumberOfPhotos.length
      }`}</div>
      {totalNumberOfPhotos.length > 1 && (
        <div
          className="left-icon"
          onClick={() => {
            previousSlide();
          }}
        >
          <IconChevron color="white" size={70} />
        </div>
      )}
      {totalNumberOfPhotos.length > 1 && (
        <div
          className="right-icon"
          onClick={() => {
            nextSlide();
          }}
        >
          <IconChevron color="white" size={70} />
        </div>
      )}
      <img src={photos[index]} alt={`Foto ${index + 1}`} />
    </div>
  );
};

export default Slide;
