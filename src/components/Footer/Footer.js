import React from "react";
import { Link } from "gatsby";

import logo from "../../img/logo.svg";
import Facebook from "../../img/social/facebook.svg";
import Instagram from "../../img/social/instagram.svg";
import Twitter from "../../img/social/twitter.svg";
import Vimeo from "../../img/social/vimeo.svg";
import { Container, TwoCol } from "../styles";
import { Footer, Top, Bottom, Branding, Social } from "./styles";

const FooterComponent = class extends React.Component {
  render() {
    return (
      <Footer>
        <Top>
          <Container>
            <TwoCol>
              <div>
                <Branding>Rebel Rabbits</Branding>
                <Social>
                  <ul>
                    <li>
                      <a
                        title="facebook"
                        href="https://facebook.com"
                        className="facebook"
                      >
                        <Facebook />
                      </a>
                    </li>
                    <li>
                      <a title="twitter" href="https://twitter.com">
                        <Twitter />
                      </a>
                    </li>
                    <li>
                      <a title="instagram" href="https://instagram.com">
                        <Instagram />
                      </a>
                    </li>
                    <li>
                      <a title="vimeo" href="https://vimeo.com">
                        <Vimeo />
                      </a>
                    </li>
                  </ul>
                </Social>
              </div>
              <div>
                <h4>site links</h4>
                <nav>
                  <ul>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/blog">Latest Posts</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </TwoCol>
          </Container>
        </Top>
        <Bottom>
          <Container>
            <p>Copyright &#169; {new Date().getFullYear()} Rebel Rabbits</p>
            <p>
              <b>site credit:</b>&nbsp;{" "}
              <a href="alexmillerwebdev.com">alexmillerwebdev</a>
            </p>
          </Container>
        </Bottom>
      </Footer>
    );
  }
};

export default FooterComponent;
