import {
  CardSection,
  Card1,
  Card2,
  CardHead,
  Description,
  Img1,
} from './Cards.styled';
import c1 from '..//..//images/Cards/C1.png';
import c2 from '..//..//images/Cards/c2.png';
import c3 from '..//..//images/Cards/c3.png';
import c31 from '..//..//images/Cards/c3-1.png';
import c4 from '..//..//images/Cards/c4.png';
import c5 from '..//..//images/Cards/c5.png';
import c6 from '..//..//images/Cards/c6.png';
import c61 from '..//..//images/Cards/c6-1.png';
import c7 from '..//..//images/Cards/c7.png';
import c8 from '..//..//images/Cards/c8.png';

export default function Card() {
  return (
    <CardSection>
      <CardHead>
        <Card1>
          <Description>
            Наші умови максимально прості не передбачають додаткових платежів та
            комісій
          </Description>
          <Img1 src={c1} alt="пазл"></Img1>
        </Card1>
        <Card1>
          <Description>
            Кілька варіантів отримання і повернення позики. Ми надаємо вибір.
            Просто вирішіть, як вам зручніше
          </Description>
          <Img1 src={c2} alt="хмарка"></Img1>
        </Card1>
        <Card2>
          <Description>
            Після надсилання SMS на номер сервісу потрібна сума протягом доби
            опиниться на банківському рахунку або стане доступною практично
            моментально через Google-гаманець або в будь-якому з 9 000 пунктів
            обслуговування
          </Description>
          <Img1 src={c3} alt="гроші"></Img1>
          <Img1 src={c31} alt="телефон"></Img1>
        </Card2>
        <Card1>
          <Description>
            Середній час обробки заявки - всього 7 хвилин.
          </Description>
          <Img1 src={c4} alt="годинник"></Img1>
        </Card1>
        <Card1>
          <Description>
            Можливість продовжувати позику необмежену кількість разів
          </Description>
          <Img1 src={c5} alt="календар"></Img1>
        </Card1>
        <Card2>
          <Description>
            День зарплати ще не скоро? Ми можемо зачекати! Просто сплатіть
            відсотки за позикою, і він автоматично триватиме ще на 21 день
          </Description>
          <Img1 src={c6} alt="монетка"></Img1>
          <Img1 src={c61} alt="календарик"></Img1>
        </Card2>
        <Card1>
          <Description>
            ТОВ МКК «Креатив» працює дистанційно по всій Україні, тому отримання
            позики можливе будь-коли в будь-якому місці.
          </Description>
          <Img1 src={c7} alt="світ"></Img1>
        </Card1>
        <Card1>
          <Description>
            Максимально проста схема отримання та повернення позики без застави
            поручителів
          </Description>
          <Img1 src={c8} alt="окей"></Img1>
        </Card1>
      </CardHead>
    </CardSection>
  );
}