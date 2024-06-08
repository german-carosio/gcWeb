// Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async'; // Importa Helmet desde react-helmet-async
import Portada from '../componets/Portada/Portada';
import Acordeon from '../componets/Acordeon/Acordeon';
import ListCards from '../componets/ListCards/ListCards';
import Grid1 from '../componets/Grid1/Grid1';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Inicio - Mi Sitio Web</title>
        <meta name="description" content="Bienvenido a mi sitio web." />
        <meta name="keywords" content="inicio, sitio web, react" />
      </Helmet>
      <section><Portada/></section>
      <section><Grid1/></section>
      <section><ListCards/></section>
      <section><Acordeon/></section>
      
    </div>
  );
};

export default Home;





