import styled from 'styled-components';
export const HeaderSection = styled.div`
  width: 1440px;
`;

export const HeaderSectionTop = styled.div`
  height: 72px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5f4;
`;
export const HeaderSectionTopLeft = styled.div`
  display: flex;
  align-items: center;
  padding-left: 156px;
`;
export const HeaderSectionTopLeftLogo = styled.img`
  margin-right: 12px;
`;
export const HeaderSectionTopLeftDescr = styled.p`
  font-size: 22px;
  line-height: 24px;
  color: #57b18a;
`;

export const HeaderSectionTopRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 156px;
`;
export const HeaderSectionTopRightDescr = styled.p`
  margin-right: 24px;

  font-size: 18px;
  color: #7f7e83;
`;
export const HeaderSectionTopRightLogo = styled.img`
  margin-left: 10px;
`;
export const HeaderSectionTopRightBtn = styled.button`
  display: flex;
  align-items: center;

  width: 222px;
  height: 48px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 0px 2px #a6a6da;
  color: #57b18a;
  font-size: 18px;
`;

export const HeaderSectionBottom = styled.div`
  height: 24px;
  padding-top: 8px;
  padding-bottom: 11px;

  border-bottom: 1px solid #e5e5f4;
`;
export const HeaderSectionBottomList = styled.ul`
  display: flex;
  justify-content: center;
`;
export const HeaderSectionBottomItem = styled.li`
  font-size: 18px;
  color: #7f7e83;
  :not(:last-child) {
    margin-right: 62px;
  }
`;
