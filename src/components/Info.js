import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import picture from "../images/profile.jpg";

const  Info=()=>{
    return (
      <div className="info">
        <img className="info--photo" src={picture} alt="profile" />
        
        <h1 className="info--fullname">Mina SB</h1>
        <h5 className="info--role">Software Developer</h5>
        <p className="info--website">
        <a
          className="info--websiteLink"
          href="https://www.github.com/Epciy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Epciy
        </a>
      </p>
      <div className="info--buttons">
        <address>
          <a href="mailto:info@email.com">
            {" "}
            <button className="button button--email">
              <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
              Email
            </button>
          </a>
        </address>
        <a
          href="https://www.linkedin.com/in/minasbaba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button button--linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
            LinkedIn
          </button>
        </a>
      </div>

      </div>
    )
}

export default Info;