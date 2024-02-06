import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as color from '../../configs/colors';

export const NavBar = styled.nav`
  min-width: 20rem;
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${color.borderColor};
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 20rem;
  height: 3.75rem;
  position: fixed;
  background-color: ${color.navColor};
  left: 0;
  right: 0;
  z-index: 100;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.75rem;
  width: 100%;
  max-width: 1580px;
  padding: 0 5rem;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Logo = styled.span`
  font-size: 24px;
  font-family: 'Bold';
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: bold;
  height: 100%;
  padding: 0 1rem;
  color: ${color.fontColor};

  &:hover {
    background-color: ${color.hoverColor};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .searchIcon,
  .bellIcon,
  .userIcon {
    font-size: 18px;
    color: #fff;
    cursor: pointer;
  }
`;
