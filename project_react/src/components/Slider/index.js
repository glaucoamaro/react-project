import React, { useEffect, useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';
import { Container, Img, Controls, ControlsWrapper } from './styled';
import { sculptureList } from '../../data';

export default function Header() {
  const [index, setIndex] = useState(0);

  function handleClickLeft() {
    if (index <= 0) return setIndex(2);
    return setIndex(index - 1);
  }

  function handleClickRight() {
    if (index >= 2) return setIndex(0);
    return setIndex(index + 1);
  }

  function handleAutomaticClick() {
    if (index >= 2) return setIndex(0);
    return setIndex(index + 1);
  }

  useEffect(() => {
    const interval = setInterval(handleAutomaticClick, 7000);
    return () => clearInterval(interval);
  }, [index]);

  const [autoTransitionInterval, setAutoTransitionInterval] = useState(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        clearInterval(autoTransitionInterval);
      } else {
        setAutoTransitionInterval(setInterval(handleAutomaticClick, 7000));
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(autoTransitionInterval);
    };
  }, [autoTransitionInterval, index]);

  const sculpture = sculptureList[index];

  return (
    <Container>
      <Img src={sculpture.url} alt="Slide" />
      <Controls>
        <ControlsWrapper>
          <div className="icon" onClick={handleClickLeft} aria-hidden="true">
            <FaAngleLeft className="AngleLeft" />
          </div>

          <div className="icon" onClick={handleClickRight} aria-hidden="true">
            <FaAngleRight className="AngleRight" />
          </div>
        </ControlsWrapper>
      </Controls>
    </Container>
  );
}
