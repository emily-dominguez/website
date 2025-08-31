import React, {useContext, useEffect} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  
  // Debug logging
  useEffect(() => {
    console.log("WorkExperience component mounted");
    console.log("workExperiences:", workExperiences);
    console.log("workExperiences.display:", workExperiences.display);
    console.log("workExperiences.experience:", workExperiences.experience);
    
    // Check if the DOM element is actually rendered
    setTimeout(() => {
      const experienceElement = document.getElementById('experience');
      if (experienceElement) {
        console.log("Experience element found:", experienceElement);
        console.log("Experience element visible:", experienceElement.offsetHeight > 0);
        console.log("Experience element styles:", window.getComputedStyle(experienceElement));
      } else {
        console.log("Experience element NOT found in DOM");
      }
    }, 1000);
  }, []);
  
  // Always render the section for debugging
  return (
    <div id="experience" className="experience-section" style={{
      display: 'block', 
      visibility: 'visible', 
      opacity: 1,
      position: 'relative',
      zIndex: 1,
      minHeight: '200px',
      width: '100%',
      backgroundColor: isDark ? '#1a1a1a' : '#f8f9fa',
      padding: '20px 0'
    }}>
      <div className="experience-container" id="workExperience">
        <div>
          <h1 className="experience-heading">Experiences</h1>
          {workExperiences.display && workExperiences.experience && workExperiences.experience.length > 0 ? (
            <div className="experience-cards-div">
              {workExperiences.experience.map((card, i) => {
                return (
                  <ExperienceCard
                    key={i}
                    isDark={isDark}
                    cardInfo={{
                      company: card.company,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      descBullets: card.descBullets
                    }}
                  />
                );
              })}
            </div>
          ) : (
            <div style={{textAlign: 'center', padding: '20px'}}>
              <p>No experiences found or section disabled</p>
              <p>Display: {String(workExperiences.display)}</p>
              <p>Experiences count: {workExperiences.experience ? workExperiences.experience.length : 'undefined'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
