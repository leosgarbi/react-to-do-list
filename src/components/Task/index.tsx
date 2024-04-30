import TaskContent from './components/TaskContent';
import TaskHeader from './components/TaskHeader';
import * as Styled from './styled';

export type TasksProps = {
  name: string;
};

export default function Task({ name }: TasksProps) {
  return (
    <Styled.TasksList>
      <TaskHeader />
      <Styled.DividerLine />

      <TaskContent />
      {name}
    </Styled.TasksList>
  );
}
