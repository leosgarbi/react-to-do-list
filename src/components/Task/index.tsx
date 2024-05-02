import TaskContent from './components/TaskContent';
import TaskHeader from './components/TaskCounter';
import * as Styled from './styled';

export default function Task() {
  return (
    <Styled.TasksList>
      <TaskHeader />
      <Styled.DividerLine />

      <TaskContent />
    </Styled.TasksList>
  );
}
