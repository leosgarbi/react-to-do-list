import { PlusCircle } from '@phosphor-icons/react';
import { Trash } from '@phosphor-icons/react/dist/ssr';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { Input } from './components/Input/Input';
import './global.css';
import * as Styled from './styled';

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

        <Styled.TasksList>
          <Styled.HeaderContent>
            <aside>
              Tarefas criadas <span>0</span>
            </aside>
            <aside>
              Concluídas <span>2 de 5</span>
            </aside>
          </Styled.HeaderContent>

          <Styled.DividerLine />

          <Styled.TaskListWrapper>
            <Styled.TaskListContent>
              <input type='checkbox' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <button>
                <Trash color={'var(--gray-300)'} />
              </button>
            </Styled.TaskListContent>
          </Styled.TaskListWrapper>
        </Styled.TasksList>
      </Styled.Content>
    </main>
  );
}
