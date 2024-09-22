import styles from './Display.module.css'

function Display({displayValue}) {
    return ( 
        <>
          <input className={styles.input} value={displayValue} readOnly></input>
        </>
     );
}

export default Display;