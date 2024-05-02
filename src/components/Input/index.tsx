import { PlusCircle } from '@phosphor-icons/react';
import * as Styled from './styled';

export function Input() {
  return (
    <Styled.Container>
      <Styled.TextArea placeholder='Adicione uma tarefa' />
      <Styled.Button>
        Criar
        <PlusCircle size={16} color='#f2f2f2' weight='bold' />
      </Styled.Button>
    </Styled.Container>
  );
}
