import React from "react";

import Layout from "../../components/Layout";
import PropertyRoll from "../../components/PropertyRoll";
import Hero from "../../components/Hero";
import { Container, Section } from "../../components/styles";

export default class PropertyIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero type="page" title="Search..." />
        <main>
          <Section fade={true}>
            <Container>
              <PropertyRoll />
            </Container>
          </Section>
        </main>
      </Layout>
    );
  }
}
