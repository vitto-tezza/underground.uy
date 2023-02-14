import React from "react";
import AnDeTrois from "../../../Utils/Images/Artistas/AnDe Trois 1 photo.png";
import DiegoAmaro from "../../../Utils/Images/Artistas/DiegoAmaro.jpg";
import hanstler from "../../../Utils/Images/Artistas/hanstler.jpeg";
import IF from "../../../Utils/Images/Artistas/IF-(9-2).jpg";
import IMG from "../../../Utils/Images/Artistas/IMG_5505.JPG";
import lestaaaaa from "../../../Utils/Images/Artistas/lestaaaaa.jpeg";
import NKN from "../../../Utils/Images/Artistas/NKN_1560.jpg";
import SAMUELTERRA from "../../../Utils/Images/Artistas/SAMUEL TERRA.jpeg";
import "./ArtistsC.scss";

const ArtistsC = () => {
  return (
    <>
      <div className="Artists">
        <div className="Artists-Container">
          <div className="Artists-Container_List">
            <div className="Artists-Container_List--Card">
              <img
                className="Artists-Container_List--Card__img"
                src={AnDeTrois}
              ></img>
              <div className="Artists-Container_List--Card__txt">nombre</div>
            </div>
            <div className="Artists-Container_List--Card">
              <img
                className="Artists-Container_List--Card__img"
                src={DiegoAmaro}
              ></img>
              <div className="Artists-Container_List--Card__txt">nombre</div>
            </div>
            <div className="Artists-Container_List--Card">
              <img
                className="Artists-Container_List--Card__img"
                src={hanstler}
              ></img>
              <div className="Artists-Container_List--Card__txt">nombre</div>
            </div>
            <div className="Artists-Container_List--Card">
              <img className="Artists-Container_List--Card__img" src={IF}></img>
              <div className="Artists-Container_List--Card__txt">nombre</div>
            </div>
            <div className="Artists-Container_List--Card">
              <img
                className="Artists-Container_List--Card__img"
                src={IMG}
              ></img>
              <div className="Artists-Container_List--Card__txt">nombre</div>
            </div>
            <div className="Artists-Container_List--Card">
              <img
                className="Artists-Container_List--Card__img"
                src={lestaaaaa}
              ></img>
              <div className="Artists-Container_List--Card__txt">nombre</div>
            </div>
            <div className="Artists-Container_List--Card">
              <img
                className="Artists-Container_List--Card__img"
                src={NKN}
              ></img>
              <div className="Artists-Container_List--Card__txt">nombre</div>
            </div>
            <div className="Artists-Container_List--Card">
              <img
                className="Artists-Container_List--Card__img"
                src={SAMUELTERRA}
              ></img>
              <div className="Artists-Container_List--Card__txt">nombre</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistsC;
