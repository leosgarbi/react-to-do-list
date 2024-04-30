import styled from 'styled-components';

export const Container = styled.input`
  border: 1px solid var(--gray-700);
  border-radius: 8px;

  background-color: var(--gray-500);
  color: var(--gray-100);

  height: 3.375rem;
  padding: 1rem;
  width: 100%;

  line-height: 140%;

  ::placeholder {
    color: var(--gray-300);
  }

  :focus {
    border-color: var(--purple-dark);
  }
`;
