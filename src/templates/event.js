import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { Container } from "../components/styles";
import Hero from "../components/Hero";
// import Features from "../components/Features";
// import Testimonials from "../components/Testimonials";
// import Pricing from "../components/Pricing";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const EventPageTemplate = ({
  image,
  title,
  author,
  description,
  tags,
}) => (
  <>
    <Hero type="page" title={title} />
    <Container>
      <h2>{title}</h2>
      <div style={{ maxWidth: "400px" }}>
        {image ? (
          <PreviewCompatibleImage
            imageInfo={{
              image: image,
              alt: `featured image thumbnail for post ${title}`,
              aspectRatio: 21 / 9,
            }}
          />
        ) : null}
      </div>
      <div>
        <h3>{author}</h3>
        <p>{description}</p>
        {tags && (
          <ul>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </Container>
  </>
);

EventPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
};

const EventPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log("frontmatter", frontmatter);

  return (
    <Layout>
      <EventPageTemplate
        image={frontmatter.featuredimage}
        title={frontmatter.title}
        author={frontmatter.author}
        description={frontmatter.description}
        tags={frontmatter.tags}
      />
    </Layout>
  );
};

EventPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default EventPage;

export const EventPageQuery = graphql`
  query EventPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        author
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
