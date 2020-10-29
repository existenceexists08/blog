import styled from "styled-components";

export const ImgWrapper = styled.div`
  grid-area: image;
`;
export const Social = styled.div`
  grid-area: social;
`;
export const Event = styled.div`
  grid-area: event;
`;
export const Author = styled.div`
  grid-area: author;
`;
export const AuthorName = styled.h3``;
export const AuthorSubHeading = styled.p``;

export const Overview = styled.div`
  grid-area: overview;
`;
export const Title = styled.h2`
  grid-area: title;
`;
export const ByLine = styled.div`
  grid-area: byline;
`;
export const Tags = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Grid = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-areas: "author event";
    grid-gap: 3em;
    grid-auto-rows: auto;
    grid-template-columns: 30% 70%;
  }
`;
