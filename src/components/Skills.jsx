import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/images/meter1.svg'
import meter2 from '../assets/images/meter2.svg'
import meter3 from '../assets/images/meter3.svg'
import SkillCard from "./Skill-Card";


const responsive = {
  desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
  }
  };

const sliderImageUrl = [
  //First image url
  {
    language: 'JavaScript',
    percentage: '80'
  },
  {
    language: 'ReactJs',
    percentage: '55'
  },
  {
    language: 'NodeJs',
    percentage: '50'
  }, 
  {
    language: 'ExpressJs',
    percentage: '50'
  },
  {
    language: 'MongoDB',
    percentage: '40'
  }, 
  {
    language: 'C++',
    percentage: '70'
  }, 
];
const Skills = () => {
  return (
    <>
    <section className="skills-section" id="skills">
      <div className="skills-section-container">
          <div>
            <h1 className="main-heading">Skills</h1>
              <p>Driven by a desire to gain technical and industrial knowledge, I am always open to learning and contributing
                to the community through innovation and hard work. My proficiency lies in the Java programming language, 
                and I possess a deep understanding of Data Structures and Algorithms. Additionally, I have developed several
                  projects using the MERN stack.
              </p>
          </div>
           <div>
              <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true} 
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]} 
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                  >
                    {sliderImageUrl.map((ele, index) => ( 
                        <SkillCard language = {ele.language} percentage = {ele.percentage}/>
                    ))}
                </Carousel>
           </div>
      </div>
      </section>
    </>
  );
};
export default Skills;
