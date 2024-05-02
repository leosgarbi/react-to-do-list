import { Clipboard } from '@phosphor-icons/react';
import * as Styled from './styled';

export function Empty() {
  return (
    <Styled.Container>
      <Clipboard size={32} />
      <Styled.TextInfo>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </Styled.TextInfo>
    </Styled.Container>
  );
}
