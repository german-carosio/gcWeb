import React from 'react';
import styles from './Acordeon.module.css';

const Acordeon = () => {
  return (
    <>
    <h2 className={styles.title}>Acordeón:</h2>
     <div className={styles.accordion}>
      <details>
        <summary>
          <span>Item 1</span>
          <i className="fas fa-chevron-down"></i>
        </summary>
        <p>Contenido del primer item.</p>
      </details>
      <details>
        <summary>
          <span>Item 2</span>
          <i className="fas fa-chevron-down"></i>
        </summary>
        <p>Contenido del segundo item.</p>
      </details>
      <details>
        <summary>
          <span>Item 3</span>
          <i className="fas fa-chevron-down"></i>
        </summary>
        <p>Contenido del tercer item.</p>
      </details>
    </div>
    </>
   
  );
}

export default Acordeon;
