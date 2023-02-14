import React from "react";
import DYNAMICPHASE from "../../../Utils/Images/Releases/DYNAMIC-PHASE-(1).jpg";
import GABRIELCHLOE from "../../../Utils/Images/Releases/GABRIEL-CHLOE.jpg";
import LENFANT from "../../../Utils/Images/Releases/L-ENFANT.jpg";
import MARTINPANIZZA from "../../../Utils/Images/Releases/MARTIN-PANIZZA.jpg";
import MATT32 from "../../../Utils/Images/Releases/MATT32-(1).jpg";
import MAURGULO from "../../../Utils/Images/Releases/MAUR-GULO.jpg";
import PHASED from "../../../Utils/Images/Releases/PHASED-(1).jpg";
import RONNYEM from "../../../Utils/Images/Releases/RONNYE-M.jpg";
import VA from "../../../Utils/Images/Releases/VA-(1).jpg";
import "./ReleasesC.scss";

const ReleasesC = () => {
  return (
    <>
      <div className="ReleasesC">
        <div className="ReleasesC-Container">
          <div className="ReleasesC-Container_List">
            <div className="ReleasesC-Container_List--img">
              <a
                href="https://www.beatport.com/release/lost-in-silence/3963576"
                target="_blank"
              >
                <img
                  className="ReleasesC-Container_List--img__Release"
                  src={DYNAMICPHASE}
                ></img>
              </a>
            </div>
            <div className="ReleasesC-Container_List--img">
              <a
                href="https://www.beatport.com/release/bad-habits/3720707"
                target="_blank"
              >
                <img
                  className="ReleasesC-Container_List--img__Release"
                  src={GABRIELCHLOE}
                ></img>
              </a>
            </div>
            <div className="ReleasesC-Container_List--img">
              <a
                href="https://www.beatport.com/release/space-noises/3889263"
                target="_blank"
              >
                <img
                  className="ReleasesC-Container_List--img__Release"
                  src={LENFANT}
                ></img>
              </a>
            </div>
            <div className="ReleasesC-Container_List--img">
              <a
                href="https://www.beatport.com/release/esto-es-techno/3987465"
                target="_blank"
              >
                <img
                  className="ReleasesC-Container_List--img__Release"
                  src={MARTINPANIZZA}
                ></img>
              </a>
            </div>
            <div className="ReleasesC-Container_List--img">
              <a
                href="https://www.beatport.com/release/reliquia/3944340"
                target="_blank"
              >
                <img
                  className="ReleasesC-Container_List--img__Release"
                  src={MATT32}
                ></img>
              </a>
            </div>
            <div className="ReleasesC-Container_List--img">
              <a
                href="https://www.beatport.com/release/the-goddess-of-the-moon/3773235"
                target="_blank"
              >
                <img
                  className="ReleasesC-Container_List--img__Release"
                  src={MAURGULO}
                ></img>
              </a>
            </div>
            <div className="ReleasesC-Container_List--img">
              <a
                href="https://www.beatport.com/release/supernova/3986935"
                target="_blank"
              >
                <img
                  className="ReleasesC-Container_List--img__Release"
                  src={PHASED}
                ></img>
              </a>
            </div>
            <div className="ReleasesC-Container_List--img">
              <a href="" target="_blank">
                <img
                  className="ReleasesC-Container_List--img__Release"
                  src={RONNYEM}
                ></img>
              </a>
            </div>
            <div className="ReleasesC-Container_List--img">
              <a
                href="https://www.beatport.com/release/the-outcasts-vol-iii/3837398"
                target="_blank"
              >
                <img
                  className="ReleasesC-Container_List--img__Release"
                  src={VA}
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReleasesC;
