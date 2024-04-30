import * as Styled from './styled';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({ children }: Props) {
  return <Styled.ButtonContainer>{children}</Styled.ButtonContainer>;
}
