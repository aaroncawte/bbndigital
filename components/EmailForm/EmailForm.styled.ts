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

export const StyledHiddenLabel = styled.label`
  position: absolute;
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
`;
