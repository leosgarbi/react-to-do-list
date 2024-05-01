import styled from 'styled-components';

export const ButtonContainer = styled.button`
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
