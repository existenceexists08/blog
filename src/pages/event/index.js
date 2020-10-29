import React from "react";

import Layout from "../../components/Layout";
import { EventRollFetcher } from "../../components/EventRoll";
import Hero from "../../components/Hero";
import { Container, Section, SectionHeading } from "../../components/styles";

export default class EventIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero type="page" title=" Search Events..." />
        <main>
          <Section fade={true}>
            <Container>
              <SectionHeading>Latest Events</SectionHeading>
              <EventRollFetcher />
            </Container>
          </Section>
        </main>
      </Layout>
    );
  }
}
