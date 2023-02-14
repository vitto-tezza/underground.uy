import React from "react";
import instagram from "../../../Utils/Images/Redes/instagram.png";
import facebook from "../../../Utils/Images/Redes/facebook.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="Footer-Container">
          <div className="Footer-Container_Redes">
            <a
              href="https://www.instagram.com/underground.records.uy/"
              target="_blank"
            >
              <img
                className="Footer-Container_Redes--img"
                src={instagram}
              ></img>
            </a>
          </div>
          <div className="Footer-Container_Redes">
            <a
              href="https://www.facebook.com/undergeoundrecordsuy"
              target="_blank"
            >
              <img className="Footer-Container_Redes--img" src={facebook}></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
