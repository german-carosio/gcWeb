import React from 'react'
import styles from './ListCards.module.css'

const ListCards = () => {
    return (
        <>
            <h2 className={styles.title}>.</h2>
            <div className={styles.grid}>

                <div className={styles.card}>
                    <div className={styles.img}>
                        {/* <img src="https://cdn.pixabay.com/photo/2017/02/05/00/19/web-design-2038872_1280.jpg" alt="" /> */}
                    </div>
                    <div className={styles.txt}>
                        <h3>Title</h3>
                        <p>Description</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.img}>
                        {/* <img src="https://cdn.pixabay.com/photo/2017/02/05/00/19/web-design-2038872_1280.jpg" alt="" /> */}
                    </div>
                    <div className={styles.txt}>
                        <h3>Title</h3>
                        <p>Description</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.img}>
                        {/* <img src="https://cdn.pixabay.com/photo/2017/02/05/00/19/web-design-2038872_1280.jpg" alt="" /> */}
                    </div>
                    <div className={styles.txt}>
                        <h3>Title</h3>
                        <p>Description</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.img}>
                        {/* <img src="https://cdn.pixabay.com/photo/2017/02/05/00/19/web-design-2038872_1280.jpg" alt="" /> */}
                    </div>
                    <div className={styles.txt}>
                        <h3>Title</h3>
                        <p>Description</p>
                    </div>
                </div>

            </div>
        </>

    )
}

export default ListCards