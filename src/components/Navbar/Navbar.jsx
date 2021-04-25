import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  MobileIcon,
  Nav,
  NavElement,
  NavLogo,
  NavMenu,
  NavItem,
  NavbarContainer,
} from "./Navbar.elements";
import logo from "../../assets/images/logo_white.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo src={logo} alt='Logo' id='logo' />
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavElement href='/'>Inicio</NavElement>
            </NavItem>
            <NavItem>
              <NavElement href='/search'>
                Seguimiento de Comprobantes
              </NavElement>
            </NavItem>
            <NavItem>
              <NavElement href='/gestion'>Gestion de Usuarios</NavElement>
            </NavItem>
            <NavItem>
              <NavElement href='/reportes'>Reportes</NavElement>
            </NavItem>
          </NavMenu>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
