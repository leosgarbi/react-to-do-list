import styled from 'styled-components';

export const Content = styled.section`
  max-width: 46rem;
  width: 100%;

  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;

  justify-content: space-between;
  gap: 0.5rem;

  & > * {
    transform: translateY(-50%);
    margin-bottom: 2.3125rem;
  }
`;
