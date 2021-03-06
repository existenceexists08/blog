import React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import { Main, Section, Container, Tag } from "../../components/styles";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <>
    <Helmet title={`Tags | ${title}`} />
    <Layout>
      <Hero type="page" title="Tags" />
      <Main>
        <Section>
          <Container>
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: "6rem" }}
              >
                <h1 className="title is-size-2 is-bold-light">Tags</h1>
                <ul className="taglist">
                  {group.map((tag) => (
                    <li key={tag.fieldValue}>
                      <Tag>
                        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                          {tag.fieldValue} ({tag.totalCount}){" "}
                        </Link>
                      </Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      </Main>
    </Layout>
  </>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
