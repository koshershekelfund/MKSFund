import React from 'react';
import { Hero } from './Hero';
import { About } from './About';
import { Philosophy } from './Philosophy';
import { GlobalReach } from './GlobalReach';
import { Team } from './Team';
import { Founder } from './Founder';
import { AskTheRabbi } from './AskTheRabbi';
import { Community } from './Community';
import { Newsletter } from './Newsletter';

export const Home: React.FC = () => {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="philosophy">
        <Philosophy />
      </section>

      <section id="global">
        <GlobalReach />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="founder">
        <Founder />
      </section>

      <section id="contact">
        <AskTheRabbi />
      </section>

      <section id="community">
        <Community />
      </section>

      <section id="newsletter">
        <Newsletter />
      </section>
    </>
  );
};