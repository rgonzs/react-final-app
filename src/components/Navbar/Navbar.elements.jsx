import styled from "styled-components";
import { Container } from "../../globalStyles";

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  ${Container}
`;

export const Nav = styled.nav`
  /* background: rgba(0, 153, 255, 0.9); */
  background: rgb(255, 255, 255);
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  z-index: 999;
`;

export const NavLogo = styled.img`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 95vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? "0%" : "-110%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavElement = styled.a`
  color: rgba(0, 153, 255, 0.9);
  /* color: #fff; */
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem 0rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;
