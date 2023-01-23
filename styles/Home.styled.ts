import styled, { css } from "styled-components";

export const MainStyled = styled.main`
  width: 60rem;
  max-width: 100%;
  margin: 0 auto;
`;

export const SimplerStyled = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
    background: -webkit-linear-gradient(
      -45deg,
      ${theme.colors.pink},
      ${theme.colors.purple}
    );
  `};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
