import { Empty } from './components/Empty'; // Importe o componente Empty
import TaskContent from './components/TaskContent';
import TaskCounter from './components/TaskCounter';
import * as Styled from './styled';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  tasks: Task[];
  removeTask: (taskId: number) => void;
  completedTask: (taskId: number) => void;
  totalTasks: number;
  totalCompletedTasks: number;
}

export default function Task({
  tasks,
  removeTask,
  completedTask,
  totalTasks,
  totalCompletedTasks,
}: Props) {
  return (
    <Styled.TasksList>
      <TaskCounter
        totalTasks={totalTasks}
        totalCompletedTasks={totalCompletedTasks}
      />

      {tasks.length === 0 && <Styled.DividerLine />}

      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskContent
            key={task.id}
            task={task}
            removeTask={removeTask}
            completedTask={completedTask}
          />
        ))
      ) : (
        <Empty />
      )}
    </Styled.TasksList>
  );
}
