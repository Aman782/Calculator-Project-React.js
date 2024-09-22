import styles from './Button.module.css'


function Button({ keyName }){
    return (
      <>
        <button className={styles.btns}>{keyName}</button> 
      </>
    );
  }
  
  export default Button;
  