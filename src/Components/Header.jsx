import React, { useState, useEffect,useRef } from "react";
import EnqModel from "./EnqModel";
import FullBodyModal from "./FullBodyModal";

const Header = () => {
  const [deviceSize, setDeviceSize] = useState(false);
  const [bar, setBar] = useState(true);
  const [navLinkColor, setNavLinkColor] = useState("#fff");
  const [navBrandColor, setNavBrandColor] = useState("#fff");
  const [navLinkBg, setNavLinkBg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showFullBodyModal, setShowFullBodyModal] = useState(false);
  const navRef= useRef();
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setBar(false);
      setDeviceSize(true);
    } else {
      setDeviceSize(false);
      setBar(true);
    }
    window.addEventListener("resize", resize);
    function resize() {
      if (window.innerWidth <= 768) {
        setDeviceSize(true);
        setBar(false);
      } else {
        setDeviceSize(false);
        setBar(true);
      }
    }

    document.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setNavLinkBg("#fff");
        setNavBrandColor("#000");
        setNavLinkColor("#000");
        // document.getElementById("navbar").style.padding = "1rem 0.5rem";
        navRef.current.style.padding = "1rem 0.5rem";
      } else {
        setNavLinkBg("");
        setNavLinkColor("#fff");
        setNavBrandColor("#fff");
        // document.getElementById("navbar").style.padding = "2rem 0.5rem";
        navRef.current.style.padding = "2rem 0.5rem";
      }
    });
    let toggleColor = document.getElementsByClassName("nav-link");
    for (let index = 0; index < toggleColor.length; index++) {
      document.getElementsByClassName("nav-link")[index].style.color =
        navLinkColor;
    }
  }, [bar, deviceSize, navLinkColor]);

  const callModel = () => {
    setShowModal(!showModal)
  };

  const callFullBodyModal=()=>{
       setShowFullBodyModal(!showFullBodyModal);
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-light m-0"
        style={{ background: navLinkBg }}
        id="navbar"
        ref={navRef}
      >
        <div className="container-fluid">
          <span
            className="navbar-brand hvr-underline-from-left"
            style={{ color: navBrandColor }}
          >
            KALPTARU
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <span
                  className="nav-link active light-bg hvr-sweep-to-bottom enquire_link"
                  aria-current="page"
                  onClick={callModel}
                >
                  ENQUIRE NOW
                </span>
              </li>
              {bar && (
                <li className="nav-item">
                  <span className="nav-link active" aria-current="page" onClick={callFullBodyModal}>
                    <i className="fas fa-grip-lines"></i>
                  </span>
                </li>
              )}
              {deviceSize && (
                <li className="nav-item mt-2">
                  <span className="nav-link active" aria-current="page">
                    COMPANY
                  </span>
                </li>
              )}
              {deviceSize && (
                <li className="nav-item mt-2">
                  <span className="nav-link active" aria-current="page">
                    LEADERSHIP
                  </span>
                </li>
              )}
              {deviceSize && (
                <li className="nav-item toggleColor mt-2">
                  <span className="nav-link active" aria-current="page">
                    AWARDS
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
       {showModal && <EnqModel showModal={showModal}/>}
       {showFullBodyModal && <FullBodyModal showFullBodyModal={showFullBodyModal}/> }
    </>
  );
};

export default Header;
