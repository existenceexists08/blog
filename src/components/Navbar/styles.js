import styled from "styled-components";

export const Header = styled.header`
  background: none;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 0;
  left: 0;
  line-height: 4;
  margin-left: auto;
  margin-right: auto;
  padding: 1em 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 4;

  a {
    color: #fff;
    display: inline-block;
    opacity: 0.75;
    outline: 0;
    padding: 0 1em;
    text-decoration: none;
    transition: opacity 0.2s linear;

    &:hover {
      opacity: 1;
    }
  }

  button a {
    opacity: 1;
  }
`;

export const NavContainer = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SiteBranding = styled.div`
  img,
  a {
    font-weight: 500;
    letter-spacing: 1px;
    max-width: 180px;
  }
`;

export const Nav = styled.nav`
  margin-left: auto;
  > ul {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    list-style: none;
    margin: 0;
    padding-left: 0;
    position: relative;

    li:last-child {
      padding: 0 1em;
    }
  }
`;
