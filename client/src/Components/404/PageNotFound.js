import React from 'react'

import styles from './PageNotFound.module.scss'

const PageNotFound = () => {
    return (
        <div className={styles.gif}>
            <h1 className={styles.gifh1}>Pikachu has gone on vacation!</h1>
            <h3 className={styles.gifh2}>Please go to an actual page.</h3>
        </div>
    )
}

export default PageNotFound
