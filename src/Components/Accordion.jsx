import React from "react";

const Accordion = () => {
  return (
    <div className="accordion_section">
      <hr />  
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              AREA DETAILS
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            Kalpataru Avante bearing TS RERA no. P02500002612 available at http://rerait.telangana.gov.in/
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Accordion;
