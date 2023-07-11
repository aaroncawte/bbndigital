import Image from "next/image";
import { SimplerStyled } from "../../styles/Home.styled";
import {
  StyledAuthorCard,
  StyledImageContainer,
  StyledImage,
  StyledBioContainer,
} from "./AuthorCard.styled";
import authorImage from "./aaron.jpg";

const AuthorCard = () => {
  return (
    <StyledAuthorCard>
      <StyledImageContainer>
        <StyledImage>
          <Image src={authorImage} alt="Profile picture of the author" fill />
        </StyledImage>
      </StyledImageContainer>
      <StyledBioContainer>
        <h2>Aaron Cawte</h2>
        <p>
          Aaron is a Senior Front-end Developer at Octopus Energy. Say hello
          using{" "}
          <SimplerStyled
            href="https://twitter.com/aaroncawte/"
            target="_blank"
            rel="noopener"
          >
            @aaroncawte
          </SimplerStyled>{" "}
          or by email using{" "}
          <SimplerStyled
            href="mailto:aaron@bbn.digital"
            target="_blank"
            rel="noopener"
          >
            aaron@bbn.digital
          </SimplerStyled>
        </p>
      </StyledBioContainer>
    </StyledAuthorCard>
  );
};

export default AuthorCard;
