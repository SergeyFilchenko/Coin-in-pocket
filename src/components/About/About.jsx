import people from '..//..//images/bussiness-people-working-team-office-removebg-preview 2.png';
import ellips from '..//..//images/Ellipse 13.png';
// import Range from './Range';
import Card from './Cards';

import {
  AboutSection,
  AboutMain,
  AboutMainText,
  AboutMainTitle,
  AboutMainDeskr,
  AboutMainImg,
  Elippse,
} from './About.styled';

export default function About() {
  return (
    <AboutSection>
      <AboutMain>
        <AboutMainText>
          <AboutMainTitle>Про Компанію</AboutMainTitle>
          <AboutMainDeskr>
            Наша компанія ТОВ МКК «Креатив» пропонує послуги з
            мікрофінансування, засновані на міжнародних стандартах роботи з
            клієнтами. <br />З моменту свого заснування компанія працює за
            принципом чесності та відкритості співробітництва. Головні критерії
            нашої роботи – це якість та оперативність.
          </AboutMainDeskr>
        </AboutMainText>
        <Elippse src={ellips} alt="ellipse"></Elippse>
        <AboutMainImg src={people} alt="people" />
      </AboutMain>

      <div>
        <Card />
      </div>
    </AboutSection>
  );
}
