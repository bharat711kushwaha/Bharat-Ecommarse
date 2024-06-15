import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function AboutSection() {
  return (
    <Wrapper>
      <div className='container'>
        <div className='grid grid-two-column'>
          <div className='hero-section-data'>
            <p className='intro-data'>Welcome to</p>
            <h1>ECOMMERCE BHARAT</h1>
            <p>
              E-commerce Bharat an Indian based company facilitating ecommerce business solution with a main motto
              of promoting "VOCAL for LOCAL". Our aim is to make Bharat as "DIGITAL INDIA" by just encouraging our
              local business to a worldwide platform.
            </p>
            <NavLink to='/'>
              <button className='Button'>Shop now</button>
            </NavLink>
          </div>
{/* our homepage image  */}
<div className="hero-section-image">
            <figure>
              <img className="img"
                src="https://images.stockcake.com/public/b/7/0/b70c1c16-2c4f-40a3-919f-0d460de2beec_large/shopping-together-happily-stockcake.jpg"
                
              />
            </figure>
          </div>
              
     </div>
     </div>
     <div className='container'>
     <div className='grid grid-two-column'>
     <div className="hero-section-data">
     
    
     <h1>
     About Founder</h1>
     <p>
     My name is Bharat Kushwaha, and I'm currently a first-year Computer Science and Engineering student pursuing my B.Tech degree. I find joy in thinking about startups and new business ideas, which has driven me to create an e-commerce website that aims to leave a lasting impression on people. I thrive on creativity and enjoy turning innovative ideas into reality. With a strong foundation in technology and a passion for entrepreneurship, I look forward to expanding my skills and making a mark in the world of tech startups. Feel free to explore my work and reach out with any questions!


     </p>

    
     <div className="hero-section-image">
                 <figure>
                   <img className="img"
                     src="../second.jpg"
                     alt="hero-section-photo"
                    
                   />
                 </figure>
               </div>
               </div>
     </div>
     </div>
        </Wrapper>
       )
     }
  const Wrapper = styled.section`
  padding: 6rem 0;

  .img {
    width: 100%;
    height: auto;
    margin: 2rem 0;
  }

  .hero-section-data {
    p {
      margin: 1rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  }

  .Button {
    text-decoration: none;
    background-color: white;
    color: black;
    padding: 1.2rem 2rem;
    border: 2px solid blue;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover,
    &:active {
      box-shadow: ${({ theme }) => theme.colors.shadowSupport};
      transform: scale(0.96);
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    .grid {
      display: flex;
      flex-direction: column;
    }

    .Button {
      padding: 1rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

export default AboutSection;

