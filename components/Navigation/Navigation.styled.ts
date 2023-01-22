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
    &:focus {
      text-decoration: underline;
      text-decoration-color: #e8185f;
    }
  }
`;

export const H1Styled = styled.h1`
  font-size: 3.2rem;
  line-height: 6rem;
  margin: 0;
  padding: 0;
`;
