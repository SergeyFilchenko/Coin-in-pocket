import circle from '..//..//images/Ellipse 13.png';
import logo from '..//..//images/image 19.png';
import im1 from '..//..//images/img1.png';
import im2 from '..//..//images/img2.png';
import im3 from '..//..//images/img3.png';
import im4 from '..//..//images/img4.png';
import im5 from '..//..//images/Icon1.png';
import im6 from '..//..//images/Icon2.png';
import im7 from '..//..//images/Icon3.png';
import {
  Hero,
  HeroImage,
  HeroText,
  Offers,
  OffersTitles,
  OffersItem,
  OffersList,
  OffersBottomDiscr,
  OffersBottom,
  HeroTop,
  OffersDiscr,
  OffersBottomButton,
  OffersBottomTitle,
  OffersBottomList,
  WorkTitle,
  WorkButton,
  WorkParagraph,
  WorkDigit,
  WorkList,
  WorkContainer,
  WorkListItemTop,
  WorkSection,
  WorkListItemBot
} from './Main.styled';

export default function Main() {
  return (
    <div>
      <HeroTop>
        <Hero>
          <HeroText>Швидкі позики на карту</HeroText>
          <img src={circle} alt="" />
          <HeroImage src={logo} alt="" />
        </Hero>
      </HeroTop>
      <Offers>
        <OffersTitles>Спецпропозиції</OffersTitles>
        <OffersList>
          <OffersItem style={{ background: '#FFF2CB' }}>
            <OffersDiscr>
              Перша позика <br /> без відсотків
            </OffersDiscr>
            <img src={im1} alt="" />
          </OffersItem>
          <OffersItem style={{ background: '#DDEFE8' }}>
            <OffersDiscr>
              Приведи друга та отримай <br />
              знижену ставку
            </OffersDiscr>
            <img src={im2} alt="" />
          </OffersItem>
          <OffersItem style={{ background: '#FFECE5' }}>
            <OffersDiscr>
              Друга позика при вході через ДІЯ без сплати комісії
            </OffersDiscr>
            <img src={im3} alt="" />
          </OffersItem>
        </OffersList>
        <OffersBottom>
          <OffersBottomList>
            <OffersBottomTitle>Тут може бути Ваша реклама</OffersBottomTitle>
            <OffersBottomDiscr>
              Для замовлення реклами, натисни Кнопку "Замовити рекламу"
            </OffersBottomDiscr>
            <OffersBottomButton>Замовити рекламу</OffersBottomButton>
          </OffersBottomList>
          <img src={im4} alt="" />
        </OffersBottom>
      </Offers>
      <WorkSection>
        <WorkTitle>Як це працює?</WorkTitle>
        <WorkContainer>
          <WorkList>
            <WorkListItemTop>
              <img src={im5} alt="1" />
              <WorkDigit>01</WorkDigit>
            </WorkListItemTop>
            <WorkListItemBot>
              <WorkParagraph>Заповніть заявку на сайті</WorkParagraph>
              <WorkButton>Заповнити заявку</WorkButton>
            </WorkListItemBot>
          </WorkList>
          <WorkList>
            <WorkListItemTop>
              <img src={im6} alt="2" />
              <WorkDigit>02</WorkDigit>
            </WorkListItemTop>
            <WorkListItemBot>
              <WorkParagraph>Дочекайтей схвалення на E-mail</WorkParagraph>
            </WorkListItemBot>
          </WorkList>
          <WorkList>
            <WorkListItemTop>
              <img src={im7} alt="3" />
              <WorkDigit>03</WorkDigit>
            </WorkListItemTop>
            <WorkListItemBot>
              <WorkParagraph>
                Отримайте миттєву виплату на карту чи розрахунковий рахунок
              </WorkParagraph>
            </WorkListItemBot>
          </WorkList>
        </WorkContainer>
      </WorkSection>
    </div>
  );
}
