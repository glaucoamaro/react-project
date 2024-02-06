import React from 'react';
import NavBarTop from '../../components/NavBarTop';
import image from '../../assets/images/9703210.jpg';
import {
  Container,
  ProfileContainer,
  LeftSection,
  ProfileImage,
  Name,
  UserName,
  Bio,
  Header,
} from './styled';

export default function Profile() {
  return (
    <Header>
      <NavBarTop />
      <Container>
        <ProfileContainer>
          <LeftSection>
            <div className="bg-img">
              <img className="bg-image" src={image} alt="img" />
            </div>
          </LeftSection>
        </ProfileContainer>
      </Container>
    </Header>
  );
}
// {
//   /* <div className="sla">
//   <div>
//     <ProfileImage src={image} alt="Perfil" />
//   </div>
//   <div className="sla2">
//     <Name>Nome do Usuário</Name>
//     <UserName>@user-name</UserName>
//     <Bio>Minha breve biografia...</Bio>
//   </div>
// </div>; */
// }
