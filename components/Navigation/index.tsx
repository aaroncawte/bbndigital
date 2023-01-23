import Link from "next/link";
import Container from "../Container";
import {
  NavStyled,
  NavContainerStyled,
  NavTitleStyled,
  NameStyled,
} from "./Navigation.styled";

const Navigation = () => (
  <NavStyled>
    <Container>
      <NavContainerStyled>
        <NavTitleStyled>
          <Link href="/" title="Homepage">
            <NameStyled>bbn.digital</NameStyled>
          </Link>
        </NavTitleStyled>
      </NavContainerStyled>
    </Container>
  </NavStyled>
);

export default Navigation;
