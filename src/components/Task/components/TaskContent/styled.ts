import styled from 'styled-components';

interface TaskTextProps {
  completed: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 4.5rem;
  background: var(--gray-500);
  border-radius: 8px;
  padding: 12px 0 12px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  position: relative;
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  position: relative; /* Adicione esta linha */

  width: 15px;
  height: 15px;

  border: 2px solid var(--blue-500);
  border-radius: 50%;

  cursor: pointer;

  &:hover {
    border-color: var(--blue-700);
  }

  &:checked {
    background-color: var(--purple-700);
    border-color: var(--purple-700);
  }

  &:checked::after {
    content: '';
    display: block;
    width: 2px;
    height: 5px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
    position: absolute;
    top: 50%;
    left: 50%;

    &:hover:checked::after {
      background-color: var(--purple-500);
    }
  }
`;

export const TaskText = styled.p<TaskTextProps>`
  display: flex;
  width: 40rem;
  align-content: flex-start;
  gap: 8px;

  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;

  ${({ completed }) =>
    completed &&
    `
    color: var(--gray-300);
    text-decoration: line-through;
  `}
`;

export const DeleteButton = styled.button`
  all: unset;
  cursor: pointer;

  :hover {
    background: var(--gray-400);
    fill: var(--red-500);
  }
`;
