import React from 'react';
import styles from './Acordeon.module.css';

const Acordeon = () => {
  return (
    <>
      <h2 className={styles.title}>.</h2>
      <div className={styles.accordion}>
        <details>
          <summary>
            <span>Item 1</span>
            <div className={styles.icon}>
              <i className="fas fa-chevron-down"></i>
            </div>
          </summary>
          <div>
            <p>Contenido del primer item.</p>
          </div>
        </details>
        <details>
          <summary>
            <span>Item 2</span>
            <div className={styles.icon}>
              <i className="fas fa-chevron-down"></i>
            </div>
          </summary>
          <div>
            <p>Contenido del segundo item.</p>
          </div>
        </details>
        <details>
          <summary>
            <span>Item 3</span>
            <div className={styles.icon}>
              <i className="fas fa-chevron-down"></i>
            </div>
          </summary>
          <div>
            <p>Contenido del tercer item.</p>
          </div>
        </details>
      </div>
    </>

  );
}

export default Acordeon;
