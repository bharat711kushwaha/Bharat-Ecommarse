import React from 'react'
import { IoLogoDeviantart } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { Button } from '../Style/Button';
import { Container } from '../Style/container';
import styled  from 'styled-components'

function HeroSection({myData}){
const {name} =myData;
  return (
   <Wrapper>
<div className='container'>
<div className='grid grid-two-column'>
<div className="hero-section-data">

<p className='intro-data'>
Welcome to </p>
<h1>{name}</h1>
<p>
Welcome to Bharat Store, your premier online destination for a wide range of high-quality products and exceptional customer service.Bharat store is a budget-friendly clothing store that has colorful and trendy pieces for men and women
</p>
<NavLink>
    <Button>Show now</Button>
</NavLink>
</div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="https://images.pexels.com/photos/1860160/pexels-photo-1860160.jpeg?auto=compress&cs=tinysrgb"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>

</div>
</div>


   </Wrapper>
  )
}
const Wrapper = styled.section `
padding: 12rem 0;

img {
  min-width: 10rem;
  height: 10rem;
}

.hero-section-data {
  p {
    margin: 2rem 0;
  }

  h1 {
    text-transform: capitalize;
    font-weight: bold;
  }

  .intro-data {
    margin-bottom: 0;
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
.img-style {
  width: 100%;
  height: auto;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 10rem;
  }

  figure::after {
    content: "";
    width: 50%;
    height: 100%;
    left: 0;
    top: 10%;
    /* bottom: 10%; */
    background-color: rgba(81, 56, 238, 0.4);
  }
}
`;
export default HeroSection