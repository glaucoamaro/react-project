import React from 'react';
import { FaBell } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa6';
import {
  Nav,
  NavLink,
  Logo,
  IconContainer,
  NavBar,
  NavWrapper,
  NavContainer,
} from './styled';

export default function Header() {
  return (
    <NavBar>
      <NavWrapper>
        <Nav>
          <NavContainer>
            <NavLink to="/">
              <Logo>Logo.io</Logo>
            </NavLink>
            <NavLink to="/anime">Anime</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/my-list">My List</NavLink>
          </NavContainer>
          <IconContainer>
            <NavLink>
              <IoSearch className="searchIcon" />
            </NavLink>
            <NavLink>
              <FaBell className="bellIcon" />
            </NavLink>
            <NavLink to="/profile">
              <FaUser className="userIcon" />
            </NavLink>
          </IconContainer>
        </Nav>
      </NavWrapper>
    </NavBar>
  );
}
