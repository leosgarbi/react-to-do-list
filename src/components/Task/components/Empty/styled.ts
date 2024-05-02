import styled from 'styled-components';

export const Container = styled.div`
  padding: 4rem 1rem;

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  color: var(--gray-300);

  img {
    width: 50px;
  }
`;

export const TextInfo = styled.p`
  display: flex;
  flex-direction: column;
`;
