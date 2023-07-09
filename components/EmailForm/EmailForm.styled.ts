import styled from "styled-components";

export const StyledEmailForm = styled.section`
  display: flex;
  flex-direction: column;
  margin: 4.8rem 0 2.4rem;
`;

export const StyledOneLineForm = styled.form<React.HTMLProps<HTMLFormElement>>`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
