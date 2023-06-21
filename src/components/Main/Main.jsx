import circle from '..//..//images/Ellipse 13.png';
import logo from '..//..//images/image 19.png';
import im1 from '..//..//images/img1.png'
import im2 from '..//..//images/img2.png'
import im3 from '..//..//images/img3.png'
import im4 from '..//..//images/img4.png'

import { Hero, HeroImage, HeroText, OffersItem, OffersList } from './Main.styled';

export default function Main() {
  return (
    <div>
      <div>
        <Hero>
          <HeroText>Швидкі позики на карту</HeroText>
          <img src={circle} alt="" />
          <HeroImage src={logo} alt="" />
        </Hero>
      </div>
      <div>
        <h1>Спецпропозиції</h1>
        <OffersList>
            <OffersItem style={{background: '#FFF2CB'}}>
                <p>Перша позика без відсотків</p>
                <img src={im1} alt="" />
            </OffersItem>
            <OffersItem style={{background: '#DDEFE8'}}>
                <p>Приведи друга та отримай знижену ставку</p>
                <img src={im2} alt="" />
            </OffersItem>
            <OffersItem style={{background: '#FFECE5'}}>
                <p>Друга позика при вгоді через ДІЯ без сплати комісії</p>
                <img src={im3} alt="" />
            </OffersItem>
            <OffersItem style={{background: '#E6E6FC;'}}>
                <h2>Тут може бути Ваша реклама</h2>
                <p></p>
                <img src={im4} alt="" />
                <button>Замовити рекламу</button>
            </OffersItem>
        </OffersList>
      </div>
    </div>
  );
}
