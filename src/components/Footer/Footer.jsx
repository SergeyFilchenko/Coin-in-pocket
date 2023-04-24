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
          <Item>
            <a href=".#">+38(067) 115-50-95</a>
          </Item>
          <Item>
            <a href=".#">info@MonetaVkisheni.com</a>
          </Item>
          <Btn>Особистий кабінет</Btn>
        </List>
        <List>
          <Item>
            <a href=".#">Про компанію</a>
          </Item>
          <Item>
            <a href=".#">Послуги</a>
          </Item>
          <Item>
            <a href=".#">Тарифи</a>
          </Item>
          <Item>
            <a href=".#">Способи погашення</a>
          </Item>
        </List>
        <List>
          <Item>
            <a href=".#">Правила надання позик</a>
          </Item>
          <Item>
            {' '}
            <a href=".#">Свідоцтво МФО</a>
          </Item>
          <Item>
            <a href=".#">Політика конфіденційності</a>
          </Item>
        </List>
        <List>
          <Item>
            <a href=".#">Зразок заяви на мікропозику</a>
          </Item>
          <Item>
            <a href=".#">Список учасників</a>
          </Item>
          <Item>
            <a href=".#">Відповіді на запитання</a>
          </Item>
          <Item>
            <a href=".#">Контакти</a>
          </Item>
        </List>
      </Container>
    </FooterSection>
  );
}
