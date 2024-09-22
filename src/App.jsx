import Display from "./components/Display";
import Button from "./components/Button";
import './App.css'
import { useState } from "react";

function App() {
  const keys = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];
  
  const [calVal, setCalVal] = useState("");
  
  const onButtonClick = (ButtonText)=>{
     if(ButtonText=== 'C'){
      setCalVal("");
     }else if(ButtonText=== '='){
       const result = eval(calVal);
       setCalVal(result);
     }else{
       const newCalval = calVal + ButtonText;
       setCalVal(newCalval);
     }
  }

  return (
     <div className="container main-box m-4  d-flex flex-wrap justify-content-center align-items-center">
         <Display displayValue={calVal}></Display>
        <div className="m-auto d-flex flex-wrap  justify-content-center align-items-center">
           {keys.map((item)=> <Button key={item} keyName={item}  onButtonClick={onButtonClick}></Button>)}
        </div>
     </div>
  );
}

export default App;
