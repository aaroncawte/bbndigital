import styled from "styled-components";

export const FooterStyled = styled.footer`
  font-family: "Staatliches";
  color: ${({ theme }) => theme.colors.grey2};

  @media (prefers-color-scheme: dark) {
    color: ${({ theme }) => theme.wash.offBlack};
  }

  width: 100%;
  height: 6rem;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.9rem;
`;

export const NameStyled = styled.span`
  font-size: 1.4rem;
  line-height: 3rem;
`;
