import styled from 'styled-components';

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
