import styles from './Button.module.css'


function Button({ keyName, onButtonClick}){
    return (
      <>
        <button className={styles.btns} onClick={()=> onButtonClick(keyName)}>{keyName}</button> 
      </>
    );
  }
  
  export default Button;
  