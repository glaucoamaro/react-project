import React from 'react';
// import { Container } from '../../styles/GlobalStyles';
import NavBarTop from '../../components/NavBarTop';
import Slider from '../../components/Slider/index';
import { Home } from './styled';

export default function StudentsImages() {
  return (
    <Home>
      <NavBarTop />
      <Slider />
      <p />
    </Home>
  );
}
