import Link from "next/link";
import Container from "../Container";
import {
  NavStyled,
  NavContainerStyled,
  NavTitleStyled,
  H1Styled,
} from "./Navigation.styled";

const Navigation = () => (
  <NavStyled>
    <Container>
      <NavContainerStyled>
        <NavTitleStyled>
          <Link href="/" title="Home - bbn.digital">
            <H1Styled>bbn.digital</H1Styled>
          </Link>
        </NavTitleStyled>
      </NavContainerStyled>
    </Container>
  </NavStyled>
);

export default Navigation;
