import styled from "styled-components";

export const StyledEmailForm = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2.4rem 0;
`;

export const StyledOneLineForm = styled.form<React.HTMLProps<HTMLFormElement>>`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
