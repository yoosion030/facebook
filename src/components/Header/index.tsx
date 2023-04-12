import * as I from 'assets';
import * as S from './style';

const Header = () => {
  return (
    <S.Header>
      <I.Logo />
      <I.ProfileIcon width={40} height={40} />
    </S.Header>
  );
};

export default Header;
