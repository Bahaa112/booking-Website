import './App.css';
import { Link } from "react-router-dom";


export default function Header() {
  return (

      <div className="App">
      <div>
         
      <div class="list">
        <Link to="/">Home</Link>
        <br/>
        <Link to="/verify">Verify</Link>
         <br/>
        

        </div>

      
      
      </div> 
     


      </div>
      

  );
}


