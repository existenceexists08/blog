import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
// import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import Hero from "../components/Hero";
import Main from "../components/Main";
import {
  Container,
  TwoCol,
  Section,
  SectionHeading,
} from "../components/styles";
import Button from "../components/Button";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <Hero type="home" />
    <Main type="primary">
      <Section>
        <Container>
          <TwoCol flex="start">
            <div>
              <h2>allow me to introduce myself</h2>
            </div>
            <div>
              <p>
                Always write benefits over features. Mention all the benefits or
                services with some real examples. Focus on how you can help and
                benefit your user. Use simple words so that you don’t confuse
                people. Say as much in as few words as possible.
              </p>
              <p>Speak directly to users using you not I or we.</p>
              <Link to="/about">
                <Button type="transparentP">my history</Button>
              </Link>
            </div>
          </TwoCol>
        </Container>
      </Section>
      <Section type="primary" fade={true}>
        <Container>
          <SectionHeading>Latest Posts</SectionHeading>
          <BlogRoll />
        </Container>
      </Section>
      <Section
        type="CTA"
        url="https://websitedemos.net/mountain/wp-content/uploads/sites/571/2020/04/fogs-on-green-mountain-1054222.jpg"
      >
        <Container type="small">
          <h2>Get in Touch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <Link to="/contact">
            <Button type="transparentW">Contact Me</Button>
          </Link>
        </Container>
      </Section>
    </Main>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
