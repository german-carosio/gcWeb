import React from 'react'
import styles from './Portada.module.css'




const Portada = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.lado} ${styles.lado1}`}>
        <div className="lado1Txt">
          <p>SOLUCIONES DIGITALES</p>
          <h1>Aca va una frase de la concha de la lora</h1>
          <button>Boton</button>
        </div>
      </div>
      <div className={`${styles.lado} ${styles.lado2}`}>
       
      </div>
    </div>
  )
}

export default Portada