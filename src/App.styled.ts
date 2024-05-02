import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const CreateTask = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    transform: translateY(-50%);
    margin-bottom: 2.3125rem;
    align-content: center;
  }
`;

export const Content = styled.section`
  max-width: 46rem;
  width: 100%;

  margin: 0 auto;
`;
