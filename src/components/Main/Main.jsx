import circle from '..//..//images/Ellipse 13.png';
import logo from '..//..//images/image 19.png';
import im1 from '..//..//images/img1.png'
import im2 from '..//..//images/img2.png'
import im3 from '..//..//images/img3.png'
import im4 from '..//..//images/img4.png'

import { Hero, HeroImage, HeroText, Offers,OffersTitles, OffersItem, OffersList, OffersBottomDiscr,OffersBottom, HeroTop, OffersDiscr, OffersBottomButton, OffersBottomTitle, OffersBottomList } from './Main.styled';

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
            <OffersItem style={{background: '#FFF2CB'}}>
                <OffersDiscr>Перша позика <br/> без відсотків</OffersDiscr>
                <img src={im1} alt="" />
            </OffersItem>
            <OffersItem style={{background: '#DDEFE8'}}>
                <OffersDiscr
                >Приведи друга та отримай <br/>знижену ставку</OffersDiscr>
                <img src={im2} alt="" />
            </OffersItem>
            <OffersItem style={{background: '#FFECE5'}}>
                <OffersDiscr
                >Друга позика при вході через ДІЯ без сплати комісії</OffersDiscr>
                <img src={im3} alt="" />
            </OffersItem>
            </OffersList>
            <OffersBottom>
              <OffersBottomList>
              <OffersBottomTitle>Тут може бути Ваша реклама</OffersBottomTitle>
              <OffersBottomDiscr>Для замовлення реклами, натисни Кнопку "Замовити рекламу"</OffersBottomDiscr>
              <OffersBottomButton>Замовити рекламу</OffersBottomButton>
              </OffersBottomList>
                <img src={im4} alt="" />       
            </OffersBottom>
        
      </Offers>
    </div>
  );
}
