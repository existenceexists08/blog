import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { Main, Container, Section, SectionHeading } from "../components/styles";
import EventRoll from "../components/EventRoll";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import {
  Grid,
  ImgWrapper,
  Social,
  Tags,
  Name,
  Overview,
  ByLine,
} from "../templateStyles/entity";
// import Features from "../components/Features";
// import Testimonials from "../components/Testimonials";
// import Pricing from "../components/Pricing";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const EntityPageTemplate = ({ image, title, description, events }) => (
  <>
    <Hero type="entity" title={title} />
    <Main>
      <Section type="primary">
        <Container>
          <Grid>
            <ImgWrapper>
              {image && (
                <PreviewCompatibleImage
                  imageInfo={{
                    image: image,
                    alt: `featured image thumbnail for post ${title}`,
                    aspectRatio: 21 / 9,
                  }}
                />
              )}
            </ImgWrapper>
            <Name>{title}</Name>
            <ByLine>
              <p>
                Unicorn beard chia offal small batch copper mug jean shorts.
                Hella chia fashion axe before they sold out sartorial cardigan 3
                wolf moon tofu
              </p>
            </ByLine>
            <Social>
              <h3>Audience</h3>
              <ul>
                <li>
                  <b>Twitter</b>
                  <p>
                    Followers: <span>34,172</span>
                  </p>
                </li>
                <li>
                  <b>Facebook</b>
                  <p>
                    Followers: <span>51,129</span>
                  </p>
                </li>
                <li>
                  <b>YoutTube</b>
                  <p>
                    Followers: <span>82,743</span>
                  </p>
                </li>
              </ul>
            </Social>
            <Tags>
              <h3>Common Events:</h3>
              <ul>
                <li>Fascist Entryism</li>
                <li>Anti-Immigration</li>
                <li>Confederate Apologism</li>
              </ul>
            </Tags>
            <Overview>
              <h3>Overview</h3>
              <p>
                I'm baby church-key selfies mlkshk literally, taxidermy affogato
                brunch tote bag keffiyeh ramps deep v asymmetrical. Unicorn
                beard chia offal small batch copper mug jean shorts. Hella chia
                fashion axe before they sold out sartorial cardigan 3 wolf moon
                tofu health goth heirloom etsy letterpress four dollar toast
                vinyl. Unicorn actually roof party try-hard drinking vinegar,
                hella sriracha squid you probably haven't heard of them
                snackwave.
              </p>
            </Overview>
          </Grid>
        </Container>
      </Section>
      <Section type="primary">
        <Container>
          <SectionHeading>Latest Events</SectionHeading>
          <EventRoll events={events} />
        </Container>
      </Section>
    </Main>
  </>
);

EntityPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
};

const EntityPage = ({ data }) => {
  console.log("DATA", data);
  const { events, properties } = data;
  const [entity] = properties.edges;
  const { frontmatter } = entity.node;

  return (
    <Layout>
      <EntityPageTemplate
        image={frontmatter.featuredimage}
        description={frontmatter.description}
        title={frontmatter.title}
        events={events.edges}
      />
    </Layout>
  );
};

EntityPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default EntityPage;

export const EntityPageQuery = graphql`
  query EntityPage($title: String!) {
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
