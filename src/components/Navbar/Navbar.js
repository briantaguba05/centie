import React from "react";
import {
  
  NavLogo,
  Bars,
  NavMenu,
  NavLink,
  NavBtn,
  
  Nav2,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav2>
        <NavLogo to="/">NU INNOVATION TECH HUB</NavLogo>

        <Bars />

        <NavMenu>
          <NavLink to="/products" activeStyle>
            PRODUCTS
          </NavLink>
          <NavLink to="/innovators" activeStyle>
            INNOVATORS
          </NavLink>
          <NavLink to="/exhibits" activeStyle>
            EXHIBITS
          </NavLink>
          <NavLink to="/aboutus" activeStyle>
            ABOUT US
          </NavLink>
          <NavLink to="/contactus" activeStyle>
            CONTACT US
          </NavLink>
          <NavBtn></NavBtn>
        </NavMenu>
      </Nav2>
    </>
  );
};

export default Navbar;
