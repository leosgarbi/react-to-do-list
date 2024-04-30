import * as Styled from './styled';

export function Input({
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return <Styled.Container placeholder='Adicione uma nova tarefa' {...rest} />;
}
