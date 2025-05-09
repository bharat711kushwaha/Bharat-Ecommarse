import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../Style/Button';

function Error() {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404 </h2>
          <h3>Oops! Something went wrong.</h3>
          <p>The page you were looking for is not available right now. The URL might be incorrect or the page hasn't been created yet.</p>
        <p><strong>What can you do?</strong></p>
        <ul>
            <p>Try refreshing the page.</p>
            <p>Double-check the URL you entered.</p>
            <p>Return to our          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink></p>
            <p>If the problem persists, please <NavLink to="/contact">
            <Button>contact us</Button>
          </NavLink></p>
        </ul>
        <p>Thank you for your understanding!</p>


        </div>
      </div>
      <div class='mr'>

  <div class='mr__head'></div>
  <div class='mr__hat hat'>
    <div class='hat__bowl'></div>
    <div class='hat__brim'></div>
  </div>
  <div class='mr__ear mr__ear--left ear'>
    <div class='ear__inner'></div>
  </div>
  <div class='mr__ear mr__ear--right ear'>
    <div class='ear__inner'></div>
  </div>
  <div class='mr__shoe mr__shoe--left shoe'>
    <div class='shoe__body'></div>
    <div class='shoe__sole'></div>
  </div>
  <div class='mr__shoe mr__shoe--right shoe'>
    <div class='shoe__body'></div>
    <div class='shoe__sole'></div>
  </div>
  <div class='mr__nose'></div>
  <div class='mr__mouth'></div>
  <div class='mr__eye mr__eye--left eye'>
    <div class='eye__pupil'></div>
    <div class='eye__lid eye__lid--upper'></div>
    <div class='eye__lid eye__lid--lower'></div>
  </div>
  <div class='mr__eye mr__eye--right eye'>
    <div class='eye__pupil'></div>
    <div class='eye__lid eye__lid--upper'></div>
    <div class='eye__lid eye__lid--lower'></div>
  </div>
  <div class='mr__eye-brow mr__eye-brow--left'></div>
  <div class='mr__eye-brow mr__eye-brow--right'></div>
  <div class='mr__arm mr__arm--left arm'>
    <div class='hand'>
      <div class='finger'></div>
      <div class='finger'></div>
      <div class='finger'></div>
      <div class='finger'></div>
    </div>
  </div>
  <div class='mr__arm mr__arm--right arm'>
    <div class='fist'></div>
  </div>
</div>

    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
      color: #333;

    }
    .li{
      font-size: 30rem;
      color: #333;
    }

    h3 {
      font-size: 4.2rem;
      color: #333;

    }

    p {
      margin: 2rem 0;
      font-size: 18px;
            color: #555;

    }
  }
  *,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  align-items: center;
  background-color: #639;
  display: flex;
  flex-direction: column;
  font-family: 'Sigmar One', cursive;
  justify-content: center;
  margin: auto;
  padding: 1rem;
  min-height: 100vh;
  width: 100vw;
}
.message {
  text-align: center;
  margin: 5rem auto 0 auto;
  color: #fafafa;
}
@media (min-width: 768px) {
  .message {
    max-width: 30%;
  }
}
.mr {
  margin:auto;
  position:relative;
  height: 180px;
  width: 120px;
}
@media (min-width: 768px) {
  .mr {
    height: 250px;
    width: 190px;
  }
}
.mr h1 {
  color: #f8e809;
  font-size: 3rem;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  z-index: 5;
  transform-origin: left;
  transform: translate(-70%, 70%) rotate(-55deg);
}
@media (min-width: 768px) {
  .mr h1 {
    font-size: 5rem;
  }
}
.mr__head {
  background: #dd9b75;
  border-radius: 50% 50% 50% 50%/80% 80% 30% 30%;
  height: 100%;
  width: 100%;
  box-shadow: inset 0 0 50px #cb6a32;
}
.mr__hat {
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translate(-75%, 0) rotate(-30deg);
}
.mr__ear {
  position: absolute;
}
.mr__ear--left {
  right: 98%;
  top: 50%;
  transform: rotate(-10deg);
}
.mr__ear--right {
  left: 94%;
  transform: rotate(165deg);
  top: 20%;
}
.mr__shoe {
  position: absolute;
  top: 95%;
}
.mr__shoe--left {
  left: 10%;
}
.mr__shoe--right {
  right: 10%;
}
.mr__nose {
  height: 24%;
  width: 20%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(20%, -90%) rotate(-25deg);
}
.mr__nose:after,
.mr__nose:before {
  background: #ffa500;
  box-shadow: inset 0 0 20px #d45800;
  position: absolute;
  content: '';
}
.mr__nose:after {
  height: 100%;
  width: 100%;
  border-radius: 50% 50% 50% 50%/80% 80% 30% 30%;
}
.mr__nose:before {
  height: 50%;
  width: 150%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50% 50% 50% 50%/90% 90% 40% 40%;
}
.mr__mouth {
  width: 30%;
  height: 5%;
  background: #db2a06;
  position: absolute;
  top: 70%;
  border-radius: 10px;
  left: 50%;
  transform: translate(-10%, 0) rotate(20deg);
}
.mr__mouth:after {
  content: '';
  height: 25%;
  width: 60%;
  background: #c52605;
  position: absolute;
  top: 50%;
  right: 20%;
  transform: translate(0, -50%);
}
.mr__eye {
  position: absolute;
}
.mr__eye--left {
  top: 50%;
  left: 15%;
  transform: rotate(-90deg);
}
.mr__eye--right {
  top: 50%;
  left: 15%;
  transform: translate(50%, -100%) rotate(10deg);
}
.mr__eye-brow {
  position: absolute;
  height: 4%;
  width: 22%;
  background: #111;
  border-radius: 25%;
  top: 50%;
}
.mr__eye-brow--right {
  left: 15%;
  transform: translate(50%, -650%) rotate(-10deg);
}
.mr__eye-brow--left {
  left: 15%;
  transform: rotate(-90deg) translate(-50%, -350%) rotate(15deg);
}
.mr__arm {
  position: absolute;
}
.mr__arm--right {
  top: 65%;
  left: 98%;
  transform: rotate(10deg);
}
.mr__arm--left {
  top: 35%;
  left: 0;
  transform: translate(-85%, 0) rotate(200deg);
}
.hat {
  width: 60%;
  height: 45%;
}
.hat__bowl {
  background: #222;
  border-radius: 100%;
  -webkit-clip-path: inset(0 0 50% 0);
          clip-path: inset(0 0 50% 0);
  height: 100%;
  width: 100%;
}
.hat__brim {
  border-radius: 0 0 100% 100%;
  position: absolute;
  bottom: 40%;
  height: 25%;
  width: 110%;
  left: 50%;
  background: #222;
  transform: translate(-50%, 0);
}
.ear {
  height: 30%;
  width: 25%;
  background: #f981b3;
  position: absolute;
  border-radius: 130% 60% 60% 130%/100% 100% 100% 100%;
}
.ear:before {
  content: '';
  height: 80%;
  width: 80%;
  box-shadow: inset 0 0 20px #f41572;
  position: absolute;
  border-radius: 130% 60% 60% 130%/100% 100% 100% 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.ear__inner {
  height: 25%;
  width: 30%;
  position: absolute;
  top: 50%;
  right: 2px;
  background: #f981b3;
  border-radius: 100% 0 0 100%;
  transform: translate(0, -50%);
  box-shadow: -5px 0 10px #f41572;
}
.shoe {
  width: 35%;
  height: 35%;
}
.shoe__body {
  background: #4b68f4;
  border-radius: 100%;
  -webkit-clip-path: inset(0 0 50% 0);
          clip-path: inset(0 0 50% 0);
  height: 100%;
  width: 100%;
}
.shoe__sole {
  border-radius: 50% 50% 100% 100%;
  position: absolute;
  bottom: 40%;
  height: 30%;
  width: 104%;
  left: 50%;
  background: #4b68f4;
  transform: translate(-50%, 0);
}
.eye {
  height: 22%;
  width: 20%;
  background: #fff;
  border-radius: 100%;
  overflow: hidden;
}
.eye__lid {
  z-index: 2;
  position: absolute;
  background: #d0743f;
  box-shadow: inset 0 0 10px #cb6a32;
}
.eye__lid--lower {
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 50%;
  transform: translate3d(-50%, 85%, 0);
  -webkit-animation: blink-lower 5s infinite linear;
          animation: blink-lower 5s infinite linear;
}
.eye__lid--upper {
  top: 0;
  width: 100%;
  height: 100%;
  transform: translate3d(0, -80%, 0);
  -webkit-animation: blink-upper 5s infinite linear;
          animation: blink-upper 5s infinite linear;
}
.eye__pupil {
  height: 40%;
  width: 38%;
  background: #000;
  border-radius: 100%;
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
}
.arm {
  height: 4%;
  width: 40%;
  background: #fafafa;
}
.arm:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  height: 200%;
  width: 40%;
  background: #fafafa;
  -webkit-clip-path: polygon(50% 0, 0 100%, 100% 100%);
  clip-path: polygon(50% 0, 0 100%, 100% 100%);
  transform: translate(-15%, -50%) rotate(90deg);
}
.fist {
  position: absolute;
  height: 250%;
  width: 30%;
  background: #fafafa;
  position: absolute;
  border-radius: 10%;
  left: 100%;
  top: -80%;
}
.fist:after {
  content: '';
  background: #fafafa;
  height: 70%;
  width: 30%;
  position: absolute;
  top: 90%;
  border-radius: 10%;
}
.hand {
  position: absolute;
  left: 90%;
  height: 250%;
  width: 30%;
  border-radius: 100%;
  background: #fafafa;
  top: -50%;
}
.finger {
  position: absolute;
  height: 25%;
  width: 100%;
  background: #fafafa;
  left: 75%;
  top: 50%;
  border-radius: 50%;
}
.finger:nth-child(1) {
  top: -15%;
  left: 50%;
  transform: rotate(-25deg);
}
.finger:nth-child(2) {
  top: 20%;
  transform: rotate(-5deg);
}
.finger:nth-child(3) {
  top: 60%;
  transform: rotate(-5deg);
}
.finger:nth-child(4) {
  top: 90%;
  left: 50%;
  transform: rotate(25deg);
}
@-webkit-keyframes blink-lower {
  0%, 45%, 50%, 100% {
    transform: translate3d(-50%, 85%, 0);
  }
  48% {
    transform: translate3d(-50%, 70%, 0);
  }
}
@keyframes blink-lower {
  0%, 45%, 50%, 100% {
    transform: translate3d(-50%, 85%, 0);
  }
  48% {
    transform: translate3d(-50%, 70%, 0);
  }
}
@-webkit-keyframes blink-upper {
  0%, 45%, 50%, 100% {
    transform: translate3d(0%, -80%, 0);
  }
  48% {
    transform: translate3d(0%, -25%, 0);
  }
}
@keyframes blink-upper {
  0%, 45%, 50%, 100% {
    transform: translate3d(0%, -80%, 0);
  }
  48% {
    transform: translate3d(0%, -25%, 0);
  }
}

`;


export default Error