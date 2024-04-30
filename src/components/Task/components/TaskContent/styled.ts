import styled from 'styled-components';

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

export const TaskCompleted = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;

  width: 15px;
  height: 15px;

  border: 2px solid #4ea8de;
  border-radius: 50%;

  cursor: pointer;

  &:hover {
    border-color: #4ea8de;
  }

  &:checked {
    background-color: #004f99;
    border-color: #004f99;
  }

  &:checked::after {
    content: '';
    display: block;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;

export const TaskText = styled.p`
  display: flex;
  width: 40rem;
  align-content: flex-start;
  gap: 8px;

  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

export const DeleteButton = styled.button`
  all: unset;
  cursor: pointer;
`;
