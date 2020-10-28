import styled from "styled-components";

export const ImgWrapper = styled.div`
  grid-area: image;
`;
export const Social = styled.div`
  grid-area: social;
`;
export const Name = styled.h2`
  grid-area: name;
`;

export const Overview = styled.div`
  grid-area: overview;
`;
export const ByLine = styled.div`
  grid-area: byline;
`;
export const Tags = styled.div`
  grid-area: tags;
`;

export const Grid = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-areas:
      "image name"
      "image byline"
      "image tags"
      "image ..."
      "social overview";
    grid-gap: 1rem;
    grid-auto-rows: auto;
    grid-template-columns: 30% 70%;
  }
`;
