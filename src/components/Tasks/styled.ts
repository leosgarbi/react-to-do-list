import styled from 'styled-components';

export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 46rem;
  min-height: 18rem;
  padding-top: 30px;
`;

export const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;

  aside + aside {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--purple-500);
  }
`;

export const HeaderTask = styled.aside`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 0.875rem;
  font-weight: bold;
  color: var(--blue-500);
`;

export const HeaderCount = styled.span`
  color: var(--white);
  background-color: var(--gray-400);
  min-width: calc(25px + 2 * 8px);
  min-height: calc(19px + 2 * 2px);
  border-radius: 62rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  font-size: 0.75rem;
`;

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

export const DividerLine = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background-color: var(--gray-300);
  gap: 1.6rem;
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
