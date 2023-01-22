import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  width: 100%;
`;

export const NavContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavTitleStyled = styled.div`
  display: block;
  width: 100%;
  height: 6rem;
  text-align: center;
  font-style: italic;

  > a {
    text-decoration: none;

    &:hover,
    &:active,
    &:focus-visible {
      text-decoration: underline;
      text-decoration-thickness: 5px;
      text-decoration-color: ${({ theme }) => theme.colors.pink};
    }
  }
`;

export const NameStyled = styled.span`
  font-size: 3.2rem;
  line-height: 6rem;
  margin: 0;
  padding: 0;
  font-family: "Staatliches";
  font-family: 400;
  color: ${({ theme }) => theme.colors.grey3};
`;
