import React from 'react'
import styles from './CssModule.module.css';

const CssModule = () => {
  return (
    <div>
        <div className={styles.boxCssModule}>
            <h3 className={styles.textCssModule}>Css module</h3>
        </div>
    </div>
  )
}

export default CssModule