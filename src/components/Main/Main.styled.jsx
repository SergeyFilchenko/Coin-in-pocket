import styled from 'styled-components';

export const Hero = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HeroImage = styled.img`
  position: absolute;
  right: 224px;
  top: 145px;
`;
export const HeroText = styled.h1`
font-family: 'IBM Plex Serif';
width: 500px;
height: 164px;
font-style: normal;
font-weight: 600;
font-size: 68px;
line-height: 82px;
color: #3F3E42;`


// ПРОПОЗИЦІЇ

export const OffersList = styled.ul`
display: flex;
width: 360px;
padding: 24px 24px 0px 24px;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
gap: 12px;
`;

export const OffersItem = styled.li`

width: 360px;
`;