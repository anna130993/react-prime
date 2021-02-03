import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {settings} from '../../data/dataStore.js';

const FAQ = () => (
  <Container>
    <Hero titleText={settings.FAQ.defaultTitle} imgBcg={settings.FAQ.defaultImage}/>
    <p>{settings.FAQ.defaultText}</p>
  </Container>
);

export default FAQ;
