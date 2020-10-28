import React from "react";

import Layout from "../../components/Layout";
import EntityRoll from "../../components/EntityRoll";
import Hero from "../../components/Hero";
import { Container, Section } from "../../components/styles";

export default class EntityIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero type="page" title=" Search Entities..." />
        <main>
          <Section fade={true}>
            <Container>
              <EntityRoll />
            </Container>
          </Section>
        </main>
      </Layout>
    );
  }
}
