import styled from 'styled-components';
import logo from '..//..//images/Frame 384.png';
import logo1 from '..//..//images/Frame 385.png';

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
    background: #bce0d0;
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
  color: #3f3e42;
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
  color: #3f3e42;
  font-size: 36px;
  font-family: IBM Plex Serif;
  font-weight: 600;
  line-height: 44px;
`;

export const OffersBottomDiscr = styled.p`
  color: #57585f;
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
  background: #57b18a;
  color: white;
  width: 300px;
  height: 50px;
`;

// ЯК ЦЕ ПРАЦЮЄ

export const WorkTitle = styled.h1`
  color: #3f3e42;
  font-size: 44px;
  font-family: IBM Plex Serif;
  font-weight: 600;
  line-height: 52px;
  margin-bottom: 32px;
  margin-left: 115px;
`;
export const WorkButton = styled.button`
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 2px 0px #a6a6da;

  color: #57b18a;
  text-align: center;
  font-size: 18px;
  font-family: IBM Plex Sans;
  font-weight: 600;
  line-height: 24px;
  margin-top: 10px;
`;

export const WorkParagraph = styled.p`
  color: #3f3e42;

  font-size: 20px;
  font-family: IBM Plex Sans;
  font-weight: 600;
  line-height: 28px;
  text-align: center;
  padding: 10px;
`;

export const WorkDigit = styled.p`
  color: #6f6fc4;
  font-size: 32px;
  font-family: IBM Plex Sans;
  font-weight: 500;
  line-height: 32px;
`;

export const WorkList = styled.ul`
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 0px 2px 0px #a6a6da;

  width: 360px;
  height: 240px;
`;
export const WorkContainer = styled.div`
  gap: 20px;
  display: flex;
  justify-content: center;
`;

export const WorkListItemTop = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 25px;
`;
export const WorkListItemBot = styled.li`
  text-align: center;
`;
export const WorkSection = styled.div`
  margin: 100px 156px;
`;

// переваги
export const Advantages = styled.div`
  margin: 100px 270px;
`;
export const AdvantagesTitle = styled.h1`
  color: #3f3e42;
  font-size: 44px;
  font-family: IBM Plex Serif;
  font-weight: 600;
  line-height: 52px;
  margin-bottom: 32px;
`;
export const AdvantagesList = styled.ul`
  width: 1082px;
  height: 260px;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  border-radius: 16px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(166, 166, 218) 0px 0px 2px 0px;
  gap: 20px;
`;
export const AdvantagesItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  :not(:last-child):after {
    content: '';
    top: 30;
    right: 0;
    position: absolute;
    width: 1px;
    height: 188px;
    flex-shrink: 0;
    background: #e5e5f4;
  }
`;
export const AdvantagesLogo = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 30px;
`;
export const AdvantagesDeskr = styled.p`
  color: #3f3e42;
  font-size: 20px;
  font-family: IBM Plex Sans;
  line-height: 28px;
  width: 250px;
`;
