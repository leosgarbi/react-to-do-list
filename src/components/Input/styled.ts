import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  width: 46rem;
  gap: 0.5rem;
`;

export const TextArea = styled.textarea`
  border: 1px solid var(--gray-700);
  border-radius: 8px;
  background-color: var(--gray-500);
  color: var(--gray-100);
  height: 3.375rem;
  padding: 1rem;
  width: 100%;
  line-height: 140%;
  resize: none;

  ::placeholder {
    color: var(--gray-300);
  }

  :focus {
    border-color: var(--purple-dark);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.25rem;
  padding: 1rem;
  background-color: var(--blue-700);
  color: var(--gray-100);
  border: 0;
  border-radius: 8px;
  gap: 0.5rem;
  box-shadow: none;
  line-height: 140%;
  font-weight: bold;
  font-size: 0.875rem;
  transition: 0.2s;

  cursor: pointer;

  &:hover {
    background-color: var(--blue-500);
  }
`;
