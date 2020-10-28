import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
// import Button from "../Button";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { Wrapper, Article, Body, Header } from "./styles";

class EntityRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    if (posts && posts.length > 0) {
      console.log("post", posts[0]);
    }

    return (
      <>
        <Wrapper>
          {posts &&
            posts.map(({ node: post }) => (
              <Article
                key={post.id}
                // className={post.frontmatter.featuredpost ? "is-featured" : ""}
              >
                {post.frontmatter.featuredimage ? (
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      aspectRatio: 21 / 9,
                    }}
                  />
                ) : null}
                <Body>
                  <Header>
                    <h2>
                      <Link to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </h2>
                    {/* <p>{post.frontmatter.date}</p> */}
                  </Header>
                  <div>
                    <p>{post.frontmatter.description}</p>
                    {/* <Tags>
                      {post.frontmatter.tags.map((tag) => {
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

EntityRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query EntityRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "entity" } } }
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
    render={(data, count) => <EntityRoll data={data} count={count} />}
  />
);
