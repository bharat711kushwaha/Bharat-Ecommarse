import React from 'react'
import styled from 'styled-components'
import { NavLink} from 'react-router-dom';
import Nav from './Nav';


function Header() {
  return (
    <MainHeader>
<NavLink to= "/">
<img  className= "logo" src='https://t4.ftcdn.net/jpg/06/98/42/51/360_F_698425198_whoHlaEtMymlMpQhHB18KyuVClBVuaTw.jpg' alt =" bharat"/>


</NavLink>

        <Nav />

    </MainHeader>
  )
};
const MainHeader = styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({theme})=> theme.colors.bg};
display:flex;
justify-content: space-between;
align-items:center;
position:relative;
.logo{
    height:10rem;
    width: 10rem;
    background-size: cover;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
`

export default Header