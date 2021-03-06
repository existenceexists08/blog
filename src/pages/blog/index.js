import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import Hero from "../../components/Hero";
import { Container, Section } from "../../components/styles";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero type="page" title="Latest Posts" />
        <main>
          <Section fade={true}>
            <Container>
              <BlogRoll />
            </Container>
          </Section>
        </main>
      </Layout>
    );
  }
}
