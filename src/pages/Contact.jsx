// Contact.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact - Mi Sitio Web</title>
        <meta name="description" content="Ponte en contacto con nosotros." />
        <meta name="keywords" content="contact, sitio web, react" />
      </Helmet>
      <div class="accordion">
        <details>
            <summary>
                <span>Item 1</span>
                <i class="fas fa-chevron-down"></i>
            </summary>
            <p>Contenido del primer item.</p>
        </details>
        <details>
            <summary>
                <span>Item 2</span>
                <i class="fas fa-chevron-down"></i>
            </summary>
            <p>Contenido del segundo item.</p>
        </details>
        <details>
            <summary>
                <span>Item 3</span>
                <i class="fas fa-chevron-down"></i>
            </summary>
            <p>Contenido del tercer item.</p>
        </details>
    </div>
    </div>
  );
};

export default Contact;

