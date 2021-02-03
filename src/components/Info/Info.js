import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {settings} from '../../data/dataStore.js';

const Info = () => (
  <Container>
    <Hero titleText={settings.info.defaultTitle} imgBcg={settings.info.defaultImage}/>
    <p>{settings.info.defaultText}</p>
  </Container>
);

export default Info;
