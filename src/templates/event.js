import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { kebabCase } from "lodash";
import Layout from "../components/Layout";
import { Container, Section, Tag, Main } from "../components/styles";
import Hero from "../components/Hero";
// import Features from "../components/Features";
// import Testimonials from "../components/Testimonials";
// import Pricing from "../components/Pricing";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import {
  Author,
  AuthorName,
  AuthorSubHeading,
  ByLine,
  Event,
  Grid,
  ImgWrapper,
  Overview,
  Social,
  Tags,
  Title,
} from "../templateStyles/event";

export const EventPageTemplate = ({
  image,
  title,
  author,
  description,
  tags,
  subheading,
}) => {
  return (
    <>
      <Hero type="page" title={title} />
      <Main>
        <Section>
          <Container>
            <Grid>
              <Event>
                <Title>{title}</Title>
                {subheading && <ByLine>{subheading}</ByLine>}
                <ImgWrapper>
                  {image ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: image,
                        alt: title,
                        aspectRatio: 21 / 9,
                      }}
                    />
                  ) : null}
                </ImgWrapper>
                <Tags>
                  {tags && (
                    <ul>
                      {tags.map((tag) => (
                        <li key={tag + `tag`}>
                          <Tag>
                            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                          </Tag>
                        </li>
                      ))}
                    </ul>
                  )}
                </Tags>
                <Overview>{description}</Overview>
              </Event>
              <Author>
                <h2>Author</h2>
                <div>
                  {author.frontmatter.featuredimage ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: author.frontmatter.featuredimage,
                        alt: author.frontmatter.title,
                        aspectRatio: 21 / 9,
                      }}
                    />
                  ) : null}
                </div>

                {author.fields.slug ? (
                  <AuthorName>
                    <Link to={author.fields.slug}>
                      {author.frontmatter.title}
                    </Link>
                  </AuthorName>
                ) : (
                  <AuthorName>{author.frontmatter.title}</AuthorName>
                )}
                {author.frontmatter.subheading && (
                  <AuthorSubHeading>
                    {author.frontmatter.Authorsubheading}
                  </AuthorSubHeading>
                )}
                {author.fields.slug && (
                  <Link to={author.fields.slug}>
                    Back to Entiry profile page.
                  </Link>
                )}
              </Author>
            </Grid>
          </Container>
        </Section>
      </Main>
    </>
  );
};

EventPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
};

const EventPage = ({ data }) => {
  console.log("DATA", data);
  const { frontmatter } = data.eventData;
  const { author } = data;

  return (
    <Layout>
      <EventPageTemplate
        image={frontmatter.featuredimage}
        title={frontmatter.title}
        author={author}
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
  query EventPage($id: String!, $author: String!) {
    eventData: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        author
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    author: markdownRemark(frontmatter: { title: { eq: $author } }) {
      fields {
        slug
      }
      frontmatter {
        title
        subheading
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
