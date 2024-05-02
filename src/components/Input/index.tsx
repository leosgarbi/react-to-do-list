import { PlusCircle } from '@phosphor-icons/react';
import { ChangeEvent, FormEvent, useState } from 'react';
import * as Styled from './styled';

interface InputProps {
  addTask: (task: string) => void;
}

export function Input({ addTask }: InputProps) {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <Styled.Container onSubmit={handleSubmit}>
      <Styled.TextArea
        placeholder='Adicione uma tarefa'
        value={newTask}
        onChange={handleInputChange}
      />
      <Styled.Button type='submit'>
        Criar
        <PlusCircle size={16} color='#f2f2f2' weight='bold' />
      </Styled.Button>
    </Styled.Container>
  );
}
