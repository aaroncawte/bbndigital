import styled from "styled-components";

export const StyledSubheading = styled.div`
  margin: -1.6rem 0 1.6rem;
  padding: 0;
  font-style: italic;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.pink};

  @media (min-width: 48rem) {
    font-size: 1.6rem;
  }
`;
