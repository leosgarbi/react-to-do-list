import * as Styled from './App.styled';
import { Header } from './components/Header';
import { Input } from './components/Input';
import Task from './components/Task';
import './global.css';

export default function App() {
  return (
    <Styled.Main>
      <Header />
      <Styled.CreateTask>
        <Input />
      </Styled.CreateTask>
      <Styled.Content>
        <Task />
      </Styled.Content>
    </Styled.Main>
  );
}
