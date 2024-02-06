import styled from 'styled-components';
import * as colors from '../../configs/colors';

export const Header = styled.div`
  height: 100vh;
  background-color: ${colors.backgroundColor};
  color: ${colors.fontColor};
`;

export const Container = styled.div`
  box-sizing: border-box;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20rem;
  padding: 10px;
`;

export const LeftSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  .sla {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: -6rem;
    padding: 1rem;
    left: 5%;
    gap: 2rem;
  }
  .slaa {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .bg-img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .bg-image {
    max-width: 1580px;
    left: 0;
    border-radius: 10px;
    filter: brightness(70%);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .sla2 {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }
`;

export const RightSection = styled.div`
  display: flex;
  width: 100%;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const Name = styled.h2`
  margin: 0;
  font-size: 32px;
  text-align: left;
`;

export const UserName = styled.p`
  text-align: left;
  margin: 0;
  color: #555;
`;

export const Bio = styled.p`
  text-align: left;
  margin: 0;
  color: #555;
`;
