import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import {
  MdOutlineArrowBack,
  MdOutlineArrowForward,
  MdOutlineRemove,
} from "react-icons/md";
import { Link, useHistory } from "react-router-dom";

let pic1 = "https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/6130d94f06661.jpg";
let pic2 = "https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/6130d94f296db.jpg";
let pic3 = "https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/6130d94f3ee97.jpg";
let pic4 = "https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/6130d94f5b1da.jpg";
let carasoulPics = [pic1, pic2, pic3, pic4];
const PicLevels = () => {
  const history = useHistory();
  const [pageWidth, setPageWidth] = useState(false);
  const [currentPic, setCurrentPic] = useState(1);
  const [disablePrev, setDisablePrev] = useState(false);
  const [disableNext, setDisableNext] = useState(false);
  const [disabledTextPrev, setDisabledTextPrev] = useState();
  const [disabledTextNext, setDisabledTextNext] = useState();
  useEffect(() => {
    if (window.innerWidth > 760) {
      setPageWidth(true);
    } else {
      console.log(window.innerWidth);
      setPageWidth(false);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        console.log(window.innerWidth);
        setPageWidth(true);
      } else {
        console.log(window.innerWidth);
        setPageWidth(false);
      }
    });
    // ()=>setCurrentPic(currentPic-1>1?currentPic-1:1)
  }, [pageWidth]);

  const handlePrevPic = (currentPicNum) => {
    if (currentPicNum === 1) {
      setDisablePrev(true);
      setDisabledTextPrev("silver");
      setDisabledTextNext("navy");
    }
    if (currentPicNum > 1) {
      setCurrentPic(currentPicNum - 1);
      setDisabledTextPrev("navy");
      setDisabledTextNext("navy");
    }
  };

  const handleNextPic = (currentPicNum) => {
    if (currentPicNum === 4) {
      setDisableNext(true);
      setDisabledTextNext("silver");
      setDisabledTextPrev("navy");
    }
    if (currentPicNum < 4) {
      setCurrentPic(currentPicNum + 1);
      setDisabledTextNext("navy");
      setDisabledTextPrev("navy");
    }
  };

  const openMap = () => {
    setTimeout(() => {
      history.push("/map");
    }, 1000);
  };

  return (
    <>
      {pageWidth && (
        <div className="picLevels">
          <div className="pics">
            <img src={pic1} alt="one" />
            <p>Amenities at three different levels</p>
          </div>
          <div className="pics">
            <img src={pic2} alt="two" />
            <p>Creche with kids’ play area.</p>
          </div>
          <div className="pics">
            <img src={pic3} alt="three" />
            <p>Spacious multi-purpose hall for celebrations.</p>
          </div>
          <div className="pics">
            <img src={pic4} alt="four" />
            <p>Vastu Compliant homes with Puja Niche*</p>
          </div>
        </div>
      )}
      {!pageWidth && (
        <div className="carasoul me-auto">
          <img
            src={carasoulPics[currentPic - 1]}
            alt={`pic${1}`}
            className="img-fluid"
          />
          <p className="text-center mt-1">
            Amenities at three different levels
          </p>
          <div className="stepBtns text-center">
            <MdOutlineArrowBack
              style={{ fontSize: "2rem", color: disabledTextPrev }}
              onClick={() => handlePrevPic(currentPic)}
              disabled={disablePrev}
            />
            <span>{currentPic}</span>
            <MdOutlineRemove style={{ fontSize: "3rem" }} />
            <span>{carasoulPics.length}</span>
            <MdOutlineArrowForward
              style={{ fontSize: "2rem", color: disabledTextNext }}
              onClick={() => handleNextPic(currentPic)}
              disabled={disableNext}
            />
          </div>
        </div>
      )}
      <div className="locate-map p-3">
        <h5>Locate</h5>
        <Link to="/map" target="_blank">
          <img
            src="https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/1630591463.jpg"
            alt="locate map"
            className="img-fluid map-img"
          />
        </Link>
      </div>
    </>
  );
};

export default PicLevels;
