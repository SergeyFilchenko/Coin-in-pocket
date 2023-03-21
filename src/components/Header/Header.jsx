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
            +3(067) 115-50-95
          </HeaderSectionTopRightDescr>
          <HeaderSectionTopRightBtn>
            Особистий кабінет{' '}
            <HeaderSectionTopRightLogo src={arrow} alt="arrow" />
          </HeaderSectionTopRightBtn>
        </HeaderSectionTopRight>
      </HeaderSectionTop>
      <HeaderSectionBottom>
        <ul>
          <li>Про компанію</li>
          <li>Послуги</li>
          <li>Тарифи</li>
          <li>Способи погашення</li>
          <li>Документи</li>
          <li>Питання та відповіді</li>
          <li>Контакти</li>
        </ul>
      </HeaderSectionBottom>
    </HeaderSection>
  );
}
