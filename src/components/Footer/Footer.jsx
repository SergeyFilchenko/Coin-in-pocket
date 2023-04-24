import {
  FooterSection,
  Container,
  Item,
  Logo,
  Btn,
  Head,
  List,
} from './Footer.styled';
import frame from '..//..//images/Frame 27.png';

export default function Footer() {
  return (
    <FooterSection>
      <Container>
        <List>
          <Head>
            <Logo src={frame} alt="coin" />
            Монета в кишені
          </Head>
          <Item>+38(067) 115-50-95</Item>
          <Item>info@MonetaVkisheni.com</Item>
          <Btn>Особистий кабінет</Btn>
        </List>
        <List>
          <Item>
            <a href=".#">Про компанію</a>
          </Item>
          <Item>Послуги</Item>
          <Item>Тарифи</Item>
          <Item>Способи погашення</Item>
        </List>
        <List>
          <Item>Правила надання позик</Item>
          <Item>Свідоцтво МФО</Item>
          <Item>Політика конфіденційності</Item>
        </List>
        <List>
          <Item>Зразок заяви на мікропозику</Item>
          <Item>Список учасників</Item>
          <Item>Відповіді на запитання</Item>
          <Item>Контакти</Item>
        </List>
      </Container>
    </FooterSection>
  );
}
