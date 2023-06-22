import styled from 'styled-components';
import logo from '..//..//images/Frame 384.png'
import logo1 from '..//..//images/Frame 385.png'


export const HeroTop = styled.div`
  margin: 100px 156px;
`;
export const Hero = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  :before {
    content: '';
    position: absolute;
    width: 393px;
    height: 12px;
    flex-shrink: 0;
    border-radius: 99px;
    background: #BCE0D0;
    bottom: 176px;
    left: 131px;
  }

`;

export const HeroImage = styled.img`
  position: absolute;
  right: 125px;
  top: 20px;
  
`;
export const HeroText = styled.h1`
  font-family: 'IBM Plex Serif';
  width: 500px;
  height: 164px;
  font-style: normal;
  font-weight: 600;
  font-size: 68px;
  line-height: 82px;
  color: #3f3e42;
  :after {
    content: '';
    width: 36px;
    height: 60px;
    background-image: url(${logo});
    position: absolute;
    bottom: 134px;
    left: 50px;
  }
  :before {
    content: '';
    width: 36px;
    height: 36px;
    background-image: url(${logo1});
    position: absolute;
    bottom: 240px;
    left: 564px;
  }

`;

// ПРОПОЗИЦІЇ
export const Offers = styled.div`
  margin: 100px 156px;
`;
export const OffersTitles = styled.h1`
  color: #3f3e42;
  font-size: 44px;
  font-family: IBM Plex Serif;
  font-weight: 600;
  line-height: 52px;
  margin-bottom: 32px;
  margin-left: 116px;
`;
export const OffersList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const OffersItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 280px;
`;

export const OffersDiscr = styled.p`
text-align: center;
color: #3F3E42;
font-size: 24px;
font-family: IBM Plex Sans;
font-weight: 500;
line-height: 32px;
padding: 10px 0px 26px 0px;
`;

// OFFERS BOTTOM
export const OffersBottom = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #e6e6fc;
  width: 1120px;
  margin-left: 116px;
  margin-top: 20px;
`;

export const OffersBottomTitle = styled.h2`
color: #3F3E42;
font-size: 36px;
font-family: IBM Plex Serif;
font-weight: 600;
line-height: 44px;
`;

export const OffersBottomDiscr = styled.p`
color: #57585F;
font-size: 20px;
font-family: IBM Plex Sans;
line-height: 28px;
margin-top: 20px;
margin-bottom: 20px;
`;
export const OffersBottomList = styled.ul`
display: flex;
padding: 44px;
flex-direction: column;
`;

export const OffersBottomButton = styled.button`
display: flex;
    padding: 7px 24px 9px 24px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: #57B18A;
    color: white;
    width: 300px;
    height: 50px;
    `;