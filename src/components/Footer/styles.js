import styled from "styled-components";

export const Top = styled.div`
  padding: 50px 0;

  h4 {
    margin-bottom: 1rem;
  }
`;

export const Branding = styled.h2`
  margin-bottom: 2rem;
`;

export const Social = styled.nav`
  ul {
    display: flex;
    li {
      a {
        align-items: center;
        border-radius: 50%;
        display: flex;
        height: 2rem;
        justify-content: center;
        margin-right: 0.5rem;
        width: 2rem;
        background: rgba(26, 108, 122, 0.14);
        transition: background 0.2s linear;

        svg {
          height: 1rem;
          width: 1rem;
          fill: var(--blue-gray);
          transition: fill 0.2s linear;
        }

        &:hover {
          background: var(--blue-gray);
          svg {
            fill: #fff;
          }
        }
      }
    }
  }
`;

export const Bottom = styled.div`
  border-top: solid 1px #dbe8eb;
  p {
    color: var(--blue-gray);
    margin: 0.5em 0 !important;
  }
  a {
    text-transform: lowercase;
  }
  > div {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    p {
      margin: 0.5em 0 1em !important;
    }
    > div {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const Footer = styled.footer`
  a {
    color: var(--link);
  }
`;
