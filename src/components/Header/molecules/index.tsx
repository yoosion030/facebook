import styled from '@emotion/styled';
import { LogoIcon, UserIcon } from 'components/Header/atoms';

const Header = () => {
  return (
    <HeaderStyle>
      <LogoIcon />
      <UserIcon width={40} height={40} />
    </HeaderStyle>
  );
};

export default Header;

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
  height: 56px;
  border-bottom: 1px solid #ccc;
  background-color: #ffffff;

  svg {
    cursor: pointer;
  }
`;
