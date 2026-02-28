import React, {useContext, useState, useEffect} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const ROTATE_INTERVAL_MS = 2500;

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const titles = greeting.rotatingTitles || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (titles.length <= 1) return;
    const id = setInterval(() => {
      setCurrentIndex(i => (i + 1) % titles.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [titles.length]);

  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}{" "}
                <span className="greeting-rotating-title" key={currentIndex}>
                  {titles[currentIndex]}
                  <span className="wave-emoji">{emoji("👋")}</span>
                </span>{" "}
              </h1>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {/* {greeting.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )} */}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="Emily"
                src={require("../../assets/images/emily.jpeg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
