import {
  FooterSection,
  Container,
  ListFirst,
  ListSecond,
  ListTheard,
  ListFour,
} from './Footer.styled';

export default function Footer() {
  return (
    <FooterSection>
      <Container>
        <ListFirst>
          <h2>Монета в кишені</h2>
          <p>+38(067) 115-50-95</p>
          <p>info@MonetaVkisheni.com</p>
          <button>Особистий кабінет</button>
        </ListFirst>
        <ListSecond>
          <li>Про компанію</li>
          <li>Послуги</li>
          <li>Тарифи</li>
          <li>Способи погашення</li>
        </ListSecond>
        <ListTheard>
          <li>Правила надання позик</li>
          <li>Свідоцтво МФО</li>
          <li>Політика конфіденційності</li>
        </ListTheard>
        <ListFour>
          <li>Зразок заяви на мікропозику</li>
          <li>Список учасників</li>
          <li>Відповіді на запитання</li>
          <li>Контакти</li>
        </ListFour>
      </Container>
    </FooterSection>
  );
}
