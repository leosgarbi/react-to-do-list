import { useState } from 'react';
import { TaskTypes } from './@types';
import * as Styled from './App.styled';
import { Header } from './components/Header';
import { Input } from './components/Input';
import Task from './components/Task';
import './global.css';

export default function App() {
  const [tasks, setTasks] = useState<TaskTypes[]>([]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [totalCompletedTasks, setTotalCompletedTasks] = useState(0);

  const addTask = (newTask: string) => {
    const newTaskObj = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, newTaskObj]);
    setTotalTasks((prevTotal) => prevTotal + 1);
  };

  const removeTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setTotalTasks((prevTotal) => prevTotal - 1);
  };

  const completedTask = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          const newCompletedStatus = !task.completed;
          setTotalCompletedTasks((prevTotal) =>
            newCompletedStatus ? prevTotal + 1 : prevTotal - 1
          );
          return { ...task, completed: newCompletedStatus };
        }
        return task;
      })
    );
  };

  return (
    <Styled.Main>
      <Header />
      <Styled.CreateTask>
        <Input addTask={addTask} />
      </Styled.CreateTask>
      <Styled.Content>
        <Task
          tasks={tasks}
          removeTask={removeTask}
          completedTask={completedTask}
          totalTasks={totalTasks}
          totalCompletedTasks={totalCompletedTasks}
        />
      </Styled.Content>
    </Styled.Main>
  );
}
