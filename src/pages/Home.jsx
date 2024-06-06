// Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async'; // Importa Helmet desde react-helmet-async
import Portada from '../componets/Portada/Portada';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Inicio - Mi Sitio Web</title>
        <meta name="description" content="Bienvenido a mi sitio web." />
        <meta name="keywords" content="inicio, sitio web, react" />
      </Helmet>
      <Portada/>
    </div>
  );
};

export default Home;





