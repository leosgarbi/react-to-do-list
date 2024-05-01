import { PlusCircle } from '@phosphor-icons/react';
import * as Styled from './App.styled';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Button } from './components/Input/components/Button';
import Task from './components/Task';
import './global.css';

export default function App() {
  return (
    <Styled.Main>
      <Header />

      <Styled.Content>
        <Styled.Container>
          <Input />
          <Button>
            Criar
            <PlusCircle size={16} color='#f2f2f2' weight='bold' />
          </Button>
        </Styled.Container>

        <Task />
      </Styled.Content>
    </Styled.Main>
  );
}
