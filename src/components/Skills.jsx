import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/images/meter1.svg'
import meter2 from '../assets/images/meter2.svg'
import meter3 from '../assets/images/meter3.svg'


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
    url:`${meter1}`
  },
  {
    language: 'ReactJs',
    url:`${meter2}`
  },
  {
    language: 'NodeJs',
    url:`${meter3}`
  }, 
  {
    language: 'ExpressJs',
    url:`${meter3}`
  }, {
    language: 'MongoDB',
    url:`${meter3}`
  }, 
  {
    language: 'C++',
    url:`${meter3}`
  }, 
];
const Skills = () => {
  return (
    <>
    <section className="skills-section" id="skills">
      <div className="skills-section-container">
        <h1 className="main-heading">Skills</h1>
        <p>Driven by a desire to gain technical and industrial knowledge, I am always open to learning and contributing
           to the community through innovation and hard work. My proficiency lies in the Java programming language, 
           and I possess a deep understanding of Data Structures and Algorithms. Additionally, I have developed several
            projects using the MERN stack.
        </p>
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
              <div className="slider" key={index}>
                <img src={ele.url} alt="movie" />
                <h3>{ele.language}</h3>
              </div>
          ))}
        </Carousel>
      </div>
      </section>
    </>
  );
};
export default Skills;
