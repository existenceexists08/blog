import React from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
import logo from "../../img/logo.svg";
import { Container } from "../styles";
import Button from "../Button";
import { Header, NavContainer, SiteBranding, Nav } from "./styles";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <Header>
        <Container>
          <NavContainer>
            <SiteBranding>
              <Link to="/" title="Logo">
                {/* <img src={logo} alt="Rebel Rabbits" style={{ width: "88px" }} /> */}
                Rebel Rabbits
              </Link>
            </SiteBranding>
            <Nav>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Button type="primary">
                    <Link to="/contact">Contact</Link>
                  </Button>
                </li>
              </ul>
            </Nav>
          </NavContainer>
        </Container>
      </Header>
    );

    // return (
    //   <nav
    //     className="navbar is-transparent"
    //     role="navigation"
    //     aria-label="main-navigation"
    //   >
    //     <div className="container">
    //       <div className="navbar-brand">
    // <Link to="/" className="navbar-item" title="Logo">
    //   <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
    // </Link>
    //         {/* Hamburger menu */}
    //         <div
    //           className={`navbar-burger burger ${this.state.navBarActiveClass}`}
    //           data-target="navMenu"
    //           onClick={() => this.toggleHamburger()}
    //         >
    //           <span />
    //           <span />
    //           <span />
    //         </div>
    //       </div>
    //       <div
    //         id="navMenu"
    //         className={`navbar-menu ${this.state.navBarActiveClass}`}
    //       >
    //         <div className="navbar-start has-text-centered">
    // <Link className="navbar-item" to="/about">
    //   About
    // </Link>
    //           <Link className="navbar-item" to="/products">
    //             Products
    //           </Link>
    //           <Link className="navbar-item" to="/blog">
    //             Blog
    //           </Link>
    //           <Link className="navbar-item" to="/contact">
    //             Contact
    //           </Link>
    //           <Link className="navbar-item" to="/contact/examples">
    //             Form Examples
    //           </Link>
    //         </div>
    //         <div className="navbar-end has-text-centered">
    //           <a
    //             className="navbar-item"
    //             href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <span className="icon">
    //               <img src={github} alt="Github" />
    //             </span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // )
  }
};

export default Navbar;