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
          Aaron is a Lead Software Engineer at Octopus Energy Group. Let him
          know if you liked this post using{" "}
          <SimplerStyled
            href="https://x.com/aaroncawte/"
            target="_blank"
            rel="noopener"
          >
            @aaroncawte
          </SimplerStyled>{" "}
          or by email on{" "}
          <SimplerStyled
            href="mailto:aaron@bbn.digital"
            target="_blank"
            rel="noopener"
          >
            aaron@bbn.digital
          </SimplerStyled>
          .
        </p>
      </StyledBioContainer>
    </StyledAuthorCard>
  );
};

export default AuthorCard;
