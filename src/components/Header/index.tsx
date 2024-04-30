import todoLogo from '../../assets/todoLogo.svg';
import * as Styled from './styled';

export function Header() {
  return (
    <Styled.HeaderContainer>
      <img src={todoLogo} alt='logo to-do' />
    </Styled.HeaderContainer>
  );
}
