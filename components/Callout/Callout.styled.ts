import styled, { css } from "styled-components";

export enum CalloutVariants {
  OFFBLACK = "offBlack",
  PINK = "pink",
  PURPLE = "purple",
  BLUE = "blue",
  YELLOW = "yellow",
}

export const CalloutStyled = styled.div<{ variant: CalloutVariants }>`
  position: relative;
  display: block;
  width: 100%;
  padding: 0.8rem 1.6rem 0.8rem;
  margin: 2.4rem 0;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-top-width: 2.4rem;
  border-radius: 0.4rem;

  @media (min-width: 48rem) {
    border-top-width: 0;
    border-left-width: 2.4rem;
  }

  ${({ theme, variant }) => css`
    border-color: ${theme.colors[variant]};
    background-color: ${theme.wash[variant]};

    a {
      text-decoration-color: ${theme.colors[variant]};
    }

    a:hover,
    a:focus {
      color: ${theme.colors[variant]};
      text-decoration-color: ${theme.colors[variant]};
    }
  `};
`;

export const CalloutIcon = styled.img`
  position: absolute;
  left: calc(50% - 0.8rem);
  top: -2rem;
  width: 1.6rem;
  height: 1.6rem;

  @media (min-width: 48rem) {
    top: calc(50% - 0.8rem);
    left: -2rem;
  }
`;
