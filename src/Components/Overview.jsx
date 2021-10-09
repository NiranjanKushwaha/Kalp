import React, { useEffect, useRef } from "react";
import "animate.css";
const Overview = () => {
  const overview_ref = useRef(null);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        //  console.log(window.scrollY);
        overview_ref.current.classList.add("animate__bounce");
      } else {
        overview_ref.current.classList.remove("animate__bounce");
      }
    });
  }, []);
  return (
    <div className="row overview">
      <div
        className="col-md-5"
        style={{ marginTop: "4rem", paddingTop: "10rem" }}
      >
        <h6>01 OVERVIEW</h6>
        <div className="overview_leftPic">
          <img
            src="https://d2j4tkbto6uvqv.cloudfront.net/kalpataru/6130d94edc4a2.jpg"
            alt="building"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="col-md-7">
        <div>
          <p className="overview_text animate__animated hvr-buzz-out" ref={overview_ref}>
            OVERVIEW
          </p>
        </div>
        <div className="overview_rightText">
          <div className="text">
            <h3>Kalpataru Avante</h3>
            <p>
              After the success of its first completed project, Kalpataru brings
              yet another landmark to Sanath Nagar – Kalpataru Avante.
            </p>
            <p>
              Unique in shape, intelligent in design, Kalpataru Avante is a home
              your heart always wished for. Vastu compliant and adorned with a
              host of amenities spread across 3 different levels, it’s located
              in a bustling neighborhood that brings the city closer. With a
              plush clubhouse and a perfect spread of indoor and outdoor
              comforts, it’s a home that lets you indulge in every desire.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
