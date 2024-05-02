import * as Styled from './styled';

interface TaskCounterProps {
  totalTasks: number;
  totalCompletedTasks: number;
}

export default function TaskCounter({
  totalTasks,
  totalCompletedTasks,
}: TaskCounterProps) {
  return (
    <Styled.HeaderContent>
      <Styled.HeaderTask>
        Tarefas criadas
        <Styled.HeaderCount>{totalTasks}</Styled.HeaderCount>
      </Styled.HeaderTask>
      <Styled.HeaderTask>
        Concluídas
        <Styled.HeaderCount>{`${totalCompletedTasks} de ${totalTasks}`}</Styled.HeaderCount>
      </Styled.HeaderTask>
    </Styled.HeaderContent>
  );
}
