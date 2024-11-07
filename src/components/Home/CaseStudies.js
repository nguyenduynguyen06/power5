import React from 'react';
import './css/CaseStudies.css';

const caseStudiesData = [
  {
    title: "Fletcher Building Datahub propels innovation",
    category: "MANUFACTURING",
    description: "With a new highly dynamic business framework for customer-centric transformation.",
    image: "https://cognizant.scene7.com/is/image/cognizant/cs-tile-homepage-fletcher",
  },
  {
    title: "Etex modernizes its IT foundation",
    category: "MANUFACTURING",
    description: "For a new era of sustainable innovation and transformation.",
    image: "https://cognizant.scene7.com/is/image/cognizant/cs-tile-homepage-etex",
  },
  {
    title: "Tyl by NatWest scales payments innovations",
    category: "BANKING",
    description: "To support local communities and make life easier for small businesses.",
    image: "https://cognizant.scene7.com/is/image/cognizant/cs-tile-homepage-tyl-natwest",
  },
  {
    title: "Discover more about our work",
    category: "CASE STUDIES",
    description: "Explore our extensive case study collection to see our work in action.",
    image: "https://cognizant.scene7.com/is/image/cognizant/hp-cs-see-all-stories-1",
  },
];

const CaseStudies = () => {
  return (
    <div className="case-studies">
      <h2>Case studies</h2>
      <p>We help companies anticipate and act with insight and speed.</p>
      <div className="case-studies-grid">
        {caseStudiesData.map((study, index) => (
          <div key={index} className="case-study-card">
            <img src={study.image} alt={study.title} className="case-study-image" />
            <div className="case-study-overlay">
              <div className="category">{study.category}</div>
              <h3 className="title">
                {study.title} <span>&#x2192;</span>
              </h3>
              <div className="description">{study.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
