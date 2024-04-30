import { PlusCircle } from '@phosphor-icons/react';
import * as Styled from './App.styled';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { Input } from './components/Input/Input';
import Task from './components/Tasks';
import './global.css';

export default function App() {
  return (
    <main>
      <Header />

      <Styled.Content>
        <Styled.Container>
          <Input />
          <Button>
            Click
            <PlusCircle size={16} color='#f2f2f2' weight='bold' />
          </Button>
        </Styled.Container>

        <Task name={'Teste'} />
      </Styled.Content>
    </main>
  );
}
