import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo1 from "../../Utils/Images/Logos/Logo-sello.png";
import Logo2 from "../../Utils/Images/Logos/Logo-produ.png";
import Logo3 from "../../Utils/Images/Logos/Logo-studio.png";
import "./NavBar.scss";

const NavBar = () => {
  const [sello, setSello] = useState(false);
  const toggleSello = () => {
    setProdu(false);
    setStudio(false);
    setSello(!sello);
  };

  const [produ, setProdu] = useState(false);
  const toggleProdu = () => {
    setSello(false);
    setStudio(false);
    setProdu(!produ);
  };

  const [studio, setStudio] = useState(false);
  const toggleStudio = () => {
    setProdu(false);
    setSello(false);
    setStudio(!studio);
  };

  return (
    <>
      <div className="NavBar">
        <div className="NavBar-Container">
          <img className="btn-sello" onClick={toggleSello} src={Logo1}></img>
          <div
            className={`NavBar-Container_links ${sello ? "selloIsActive" : ""}`}
          >
            <Link className="NavBar-Container_links--txt" to={"/Releases"}>
              RELEASES
            </Link>
            <Link className="NavBar-Container_links--txt" to={"/Artists"}>
              ARTISTS
            </Link>
            <Link className="NavBar-Container_links--txt" to={"/Submissons"}>
              SUBMISSONS
            </Link>
          </div>
          <img className="btn-produ" onClick={toggleProdu} src={Logo2}></img>
          <div
            className={`NavBar-Container_links ${produ ? "produIsActive" : ""}`}
          >
            <Link className="NavBar-Container_links--txt" to={"/"}>
              NEWS
            </Link>
            <Link className="NavBar-Container_links--txt" to={"/Podcast"}>
              PODCAST
            </Link>
          </div>
          <img className="btn-studio" onClick={toggleStudio} src={Logo3}></img>
          <div
            className={`NavBar-Container_links ${
              studio ? "studioIsActive" : ""
            }`}
          >
            <div className="NavBar-Container_links--txt" to={"/"}>
              pito
            </div>
            <div className="NavBar-Container_links--txt" to={"Skils"}>
              pito
            </div>
            <div className="NavBar-Container_links--txt" to={"AboutMe"}>
              pito
            </div>
            <div className="NavBar-Container_links--txt" to={"Projects"}>
              pito
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
