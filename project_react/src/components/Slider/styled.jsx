import styled from 'styled-components';
import { fontColor, backgroundColor } from '../../configs/colors';

export const Container = styled.div`
  width: 100%;
  height: 45rem;
  position: relative;
  user-select: none;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
`;

export const Controls = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: rgb(0, 0, 0);
  background: -moz-linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.7034411176580007) 0%,
    rgba(0, 0, 0, 0.3533010616355917) 7%,
    rgba(230, 230, 230, 0) 20%,
    rgba(155, 155, 155, 0) 80%,
    rgba(51, 51, 51, 0.35) 93%,
    rgba(0, 0, 0, 0.7) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.7034411176580007) 0%,
    rgba(0, 0, 0, 0.3533010616355917) 7%,
    rgba(230, 230, 230, 0) 20%,
    rgba(155, 155, 155, 0) 80%,
    rgba(51, 51, 51, 0.35) 93%,
    rgba(0, 0, 0, 0.7) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.7034411176580007) 0%,
    rgba(0, 0, 0, 0.3533010616355917) 7%,
    rgba(230, 230, 230, 0) 20%,
    rgba(155, 155, 155, 0) 80%,
    rgba(51, 51, 51, 0.35) 93%,
    rgba(0, 0, 0, 0.7) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    background-color: ${backgroundColor};
    height: 5rem;
    cursor: pointer;
    transition: all 250ms;
    &:hover {
      opacity: 70%;
    }
  }

  .AngleRight,
  .AngleLeft {
    font-size: 34px;
    color: ${fontColor};
  }
`;
