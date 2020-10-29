import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
// import Button from "../Button";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { Wrapper, Article, Body, Header } from "./styles";

class EventRoll extends React.Component {
  render() {
    const { events } = this.props;

    return (
      <>
        <Wrapper>
          {events &&
            events.map(({ node: event }) => (
              <Article
                key={event.id}
                // className={event.frontmatter.featuredevent ? "is-featured" : ""}
              >
                {event.frontmatter.featuredimage ? (
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: event.frontmatter.featuredimage,
                      alt: `featured image thumbnail for event ${event.frontmatter.title}`,
                      aspectRatio: 21 / 9,
                    }}
                  />
                ) : null}
                <Body>
                  <Header>
                    <h2>
                      <Link to={event.fields.slug}>
                        {event.frontmatter.title}
                      </Link>
                    </h2>
                    {/* <p>{event.frontmatter.date}</p> */}
                  </Header>
                  <div>
                    <p>{event.frontmatter.description}</p>
                    {/* <Tags>
                      {event.frontmatter.tags.map((tag) => {
                        if (tag && typeof tag === "string")
                          return (
                            <Link
                              key={tag}
                              to={`/tags/${tag.replace(/" "/, "-")}`}
                            >
                              <Button type="tag">{tag}</Button>
                            </Link>
                          );
                        return null;
                      })}
                    </Tags> */}
                  </div>
                </Body>
              </Article>
            ))}
        </Wrapper>
      </>
    );
  }
}

EventRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default EventRoll;

export const EventRollFetcher = () => (
  <StaticQuery
    query={graphql`
      query EventRollAllQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "event" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
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
      }
    `}
    render={(data, count) => (
      <EventRoll events={data.allMarkdownRemark.edges} count={count} />
    )}
  />
);
