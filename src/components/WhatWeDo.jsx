import { useState } from "react";
import dummyImage from "../assets/images/dummyImage.jpeg";
import addIcon from "../assets/images/addIcon.svg";


export const WhatWeDo = () => {
    const [joinUs, setJoinUs] = useState(false);

    return (
        <>
            <div className="sectionTopBtmSpace gradiantBg">
            <div className="container">
              <div className="row">
                <div className="joinUsSection " >
                  <h5 className="joinOurTeam" >Join Our Team</h5>
                  <h3 className="missionTitle" >We are embarking on a <br className="" /> profound mission</h3>
                  <p className="missionText" >Our mission is to be the global standard for modern card issuing, empowering builders to bring the most innovative products to the world.</p>
                  <div style={{display: "flex"}} >
                    <a href="#" className="joinBtn" >Join our team</a>
                  </div>
                </div>
                <div className="joinUsImgContainer" >
                  <div className={`joinUsImg ${joinUs && "hovered"} `}>
                    <div className="joinUsImgCol">
                      <div className="imgCnt">
                        <img src={dummyImage}  className="loadImage image" alt="" />
                        <img src={dummyImage}  className="hoverImage image" alt="" />
                      </div>
                      <div className="imgCnt" >
                        <img src={dummyImage}  className="loadImage image" alt="" />
                        <img src={dummyImage}  className="hoverImage image" alt="" />
                      </div>
                      <div className="imgCnt" >
                        <img src={dummyImage}  className="loadImage image" alt="" />
                        <img src={dummyImage}  className="hoverImage image" alt="" />
                      </div>
                    </div>
                    <div className="joinUsImgCol">
                      <div className="imgCnt">
                        <img src={dummyImage}  className="loadImage image" alt="" />
                        <img src={dummyImage}  className="hoverImage image" alt="" />
                      </div>
                      <div className="imgCnt" >
                      <img src={dummyImage} className="loadImage image" alt="" />
                      <img src={dummyImage} className="hoverImage image" alt="" />
                      </div>
                      <div className="imgCnt">
                        <img src={dummyImage} className="loadImage image" alt="" />
                        <img src={dummyImage} className="hoverImage image" alt="" />
                      </div>
                    </div>
                    <div className="joinUsImgCol">
                      <div className="imgCnt">
                      <img src={dummyImage} className="loadImage heightedImage" alt="" />
                      <img src={dummyImage} className="hoverImage heightedImage" alt="" />
                      </div>
                      <div className="imgCnt">
                        <div className="centerImgCnt hoverBtn"
                          onMouseEnter={() => setJoinUs(true)}
                          onMouseLeave={() => setJoinUs(false)}
                        >
                          <img src={addIcon} alt="" />
                          <div className="joinText" >Join Us</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}