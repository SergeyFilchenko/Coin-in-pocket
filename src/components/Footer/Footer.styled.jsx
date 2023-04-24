import styled from 'styled-components';
export const FooterSection = styled.div`
  padding: 60px 156px;
  border-bottom: 1px solid #e5e5f4;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
`;
export const ListFirst = styled.ul``;
export const List = styled.ul``;
export const Item = styled.li`
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #3f3e42;
  cursor: pointer;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const Logo = styled.img`
  margin-right: 20px;
`;
export const Btn = styled.button`
  width: 194px;
  height: 48px;
  background: #ffffff;

  box-shadow: 0px 0px 2px #a6a6da;
  border-radius: 8px;

  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #57b18a;
`;
export const Head = styled.h2`
  display: flex;
  align-items: center;

  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 24px;
  color: #57b18a;
  margin-bottom: 36px;
`;
