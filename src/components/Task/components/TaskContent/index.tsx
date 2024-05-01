import { Trash } from '@phosphor-icons/react';
import * as Styled from './styled';

export default function TaskContent() {
  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.CheckBox />
        <Styled.TaskText>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </Styled.TaskText>

        <Styled.DeleteButton>
          <Trash color={'var(--gray-300)'} />
        </Styled.DeleteButton>
      </Styled.Content>
    </Styled.Wrapper>
  );
}
