import styled from "styled-components";

export const StyledAuthorCard = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 6rem 0 0;

  @media (min-width: 48rem) {
    flex-direction: row;
  }
`;

export const StyledImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 8rem;
  min-width: 8rem;
  margin: 0 2rem 0 0;

  @media (min-width: 48rem) {
    width: 8rem;
    height: auto;
    margin: 0 2rem 0 0;
    align-items: center;
  }
`;

export const StyledImage = styled.div`
  position: absolute;
  width: 8rem;
  height: 8rem;
  border-radius: 0.8rem;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export const StyledBioContainer = styled.div`
  margin: -1.6rem 0 0;
`;
