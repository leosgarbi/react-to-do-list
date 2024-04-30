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
`;

// .container input,
// .container button {
//   transform: translateY(-50%);

//   margin-bottom: 2.3125rem;
// }

export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 46rem;
  min-height: 18rem;
`;

export const TaskListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 4.5rem;
  background: var(--gray-500);
  border-radius: 8px;
  padding: 12px 0 12px 0;
`;

export const TaskListContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

// .tasksList .taskListContent p {
//   display: flex;
//   width: 40rem;
//   align-content: flex-start;
//   gap: 8px;

//   font-family: 'Inter', sans-serif;
//   font-weight: 400;
//   font-size: 14px;
// }

// .tasksList .taskListContent button {
//   all: unset;
//   cursor: pointer;
// }

export const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  //
`;

// .headerContent aside {
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;

//   font-size: 0.875rem;
//   font-weight: bold;
//   color: var(--blue-500);
// }

// .headerContent aside + aside {
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   color: var(--purple-500);
// }

// .headerContent aside span {
//   color: var(--white);
//   background-color: var(--gray-400);
//   min-width: calc(25px + 2 * 8px);
//   min-height: calc(19px + 2 * 2px);
//   border-radius: 62rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 2px 8px;
//   font-size: 0.75rem;
// }

export const DividerLine = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background-color: var(--gray-300);
  gap: 1.6rem;
`;

// @media (max-width: 768px) {
//   html {
//     font-size: 87.5%;
//   }
// }
