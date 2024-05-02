import { Trash } from '@phosphor-icons/react';
import * as Styled from './styled';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  task: Task;
  removeTask: (taskId: number) => void;
  completedTask: (taskId: number) => void;
}

export default function TaskContent({
  task,
  removeTask,
  completedTask,
}: Props) {
  const handleRemoveTask = () => {
    removeTask(task.id);
  };

  const handleCompletedTask = () => {
    completedTask(task.id);
  };

  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.CheckBox
          checked={task.completed}
          onChange={handleCompletedTask}
        />
        <Styled.TaskText completed={task.completed}>
          {task.text}
        </Styled.TaskText>
        <Styled.DeleteButton onClick={handleRemoveTask}>
          <Trash color={'var(--gray-300)'} />
        </Styled.DeleteButton>
      </Styled.Content>
    </Styled.Wrapper>
  );
}
