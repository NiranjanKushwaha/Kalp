import React from "react";

const MapPage = () => {
  return (

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6098691746033!2d77.60106381413479!3d12.932777619229837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151ad98e2ea5%3A0xa2990ff1647b6968!2sMedi%20Assist!5e0!3m2!1sen!2sin!4v1633775270059!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
          title="map"
        ></iframe>
      </div>
  );
};

export default MapPage;
