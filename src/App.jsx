import Display from "./components/Display";
import Button from "./components/Button";
import './App.css'

function App() {
  const keys = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];

  return (
     <div className="container main-box m-4  d-flex flex-wrap justify-content-center align-items-center">
         <Display></Display>
        <div className="m-auto d-flex flex-wrap  justify-content-center align-items-center">
           {keys.map((item)=> <Button key={item} keyName={item}></Button>)}
        </div>
     </div>
  );
}

export default App;
