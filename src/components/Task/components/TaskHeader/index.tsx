import * as Styled from './styled';

export default function TaskHeader() {
  return (
    <Styled.HeaderContent>
      <Styled.HeaderTask>
        Tarefas criadas
        <Styled.HeaderCount>0</Styled.HeaderCount>
      </Styled.HeaderTask>
      <Styled.HeaderTask>
        Concluídas
        <Styled.HeaderCount>2 de 5</Styled.HeaderCount>
      </Styled.HeaderTask>
    </Styled.HeaderContent>
  );
}
