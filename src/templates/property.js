import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { Container } from "../components/styles";
import EventRoll from "../components/EventRoll";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
// import Features from "../components/Features";
// import Testimonials from "../components/Testimonials";
// import Pricing from "../components/Pricing";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const PropertyPageTemplate = ({ image, title, description, events }) => (
  <>
    <Hero type="page" title={title} />
    <section className="section">
      <Container>
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
        {image && (
          <PreviewCompatibleImage
            imageInfo={{
              image: image,
              alt: `featured image thumbnail for post ${title}`,
              aspectRatio: 21 / 9,
            }}
          />
        )}
      </Container>
    </section>
    <section className="section">
      <Container>
        <EventRoll events={events} />
      </Container>
    </section>
  </>
);

PropertyPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
};

const PropertyPage = ({ data }) => {
  console.log("DATA", data);
  const { events, properties } = data;
  const [property] = properties.edges;
  const { frontmatter } = property.node;

  return (
    <Layout>
      <PropertyPageTemplate
        image={frontmatter.featuredimage}
        description={frontmatter.description}
        title={frontmatter.title}
        events={events.edges}
      />
    </Layout>
  );
};

PropertyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default PropertyPage;

export const PropertyPageQuery = graphql`
  query PropertyPage($title: String!) {
    properties: allMarkdownRemark(
      filter: { frontmatter: { title: { eq: $title } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            tags
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    events: allMarkdownRemark(
      filter: { frontmatter: { author: { eq: $title } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            author
            description
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
