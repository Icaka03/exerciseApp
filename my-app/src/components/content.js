import "../styles/content.css";
import "../styles/utilities.css";

import { useState } from "react";
export default function Content() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section>
      <div className="contentText">
        <h1>
          Manage your Expenditures
          <br />
          Business Prosperity
        </h1>
        <p>Get full visibility over your business spending--Saving your time</p>
      </div>
      <div className="buttons">
        <button
          className="active"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Get Started
        </button>
        <button
          className="active"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Get Started
        </button>
      </div>
      {isVisible ? (
        <div className="popup">
          <div className="popupButton">
            <button
              onClick={() => {
                setIsVisible(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
