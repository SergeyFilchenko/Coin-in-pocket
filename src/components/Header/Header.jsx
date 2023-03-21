import frame from '..//..//images/Frame 27.png';
import arrow from '..//..//images/LC.png';

import {
  HeaderSection,
  HeaderSectionTop,
  HeaderSectionBottom,
  HeaderSectionTopLeft,
  HeaderSectionTopRight,
  HeaderSectionTopLeftLogo,
  HeaderSectionTopLeftDescr,
  HeaderSectionTopRightDescr,
  HeaderSectionTopRightBtn,
  HeaderSectionTopRightLogo,
  HeaderSectionBottomList,
  HeaderSectionBottomItem,
} from './Header.styled';

export default function Header() {
  return (
    <HeaderSection>
      <HeaderSectionTop>
        <HeaderSectionTopLeft>
          <HeaderSectionTopLeftLogo
            src={frame}
            alt="coin"
          ></HeaderSectionTopLeftLogo>
          <HeaderSectionTopLeftDescr>Монета в кишені</HeaderSectionTopLeftDescr>
        </HeaderSectionTopLeft>
        <HeaderSectionTopRight>
          <HeaderSectionTopRightDescr>
            +38(067) 115-50-95
          </HeaderSectionTopRightDescr>
          <HeaderSectionTopRightBtn>
            Особистий кабінет{' '}
            <HeaderSectionTopRightLogo src={arrow} alt="arrow" />
          </HeaderSectionTopRightBtn>
        </HeaderSectionTopRight>
      </HeaderSectionTop>
      <HeaderSectionBottom>
        <HeaderSectionBottomList>
          <HeaderSectionBottomItem>Про компанію</HeaderSectionBottomItem>
          <HeaderSectionBottomItem>Послуги</HeaderSectionBottomItem>
          <HeaderSectionBottomItem>Тарифи</HeaderSectionBottomItem>
          <HeaderSectionBottomItem>Способи погашення</HeaderSectionBottomItem>
          <HeaderSectionBottomItem>Документи</HeaderSectionBottomItem>
          <HeaderSectionBottomItem>
            Питання та відповіді
          </HeaderSectionBottomItem>
          <HeaderSectionBottomItem>Контакти</HeaderSectionBottomItem>
        </HeaderSectionBottomList>
      </HeaderSectionBottom>
    </HeaderSection>
  );
}
