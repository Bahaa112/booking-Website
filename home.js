import './App.css';
import firstimg from './images/firstimg.png'
import imgend from './images/homeend.jpg'
import { Link } from "react-router-dom";


export default function Home() {
  return (


      <div className="App">

      <div>
        <img className="firstpicture" src={firstimg}  width="2362" height="200" />
      </div> 

      <div className="whatdowedo">
       <h1 className="idea">What do we do?</h1>
      <ul>
        <li className="firstup">We make  it easier for you to donate in less time and effort.</li>
        <li className="secondup">You can fill your information on the site and it will show you if you can donate blood or not from home.</li>
        <li className="thirdup">You can book an appointment at any time and any day to donate blood.</li>
      </ul> 
      </div>

      
        <div>
       <h1 className="whodonate">Who can donate?</h1>
      <ul>
        <li className="firstmiddle">Donation frequency: Every 56 days.</li>
        <li className="secondmiddle">The donor must weigh at least 50 kg.</li>
        <li className="thirdmiddle">The pulse should be between 50-100 per minute.</li>
        <li className="forthmiddle">The age of the donor should be between 18-65 years.</li>
        <li className="fifthmiddle">The average blood pressure is less than 120/80 mm Hg.</li>
        <li className="sixthmiddle">That the temperature does not exceed 37 degrees Celsius.</li>
        <li className="seventhmiddle">The donor must be in good health and not suffer from any infectious diseases.</li>
        <li className="eighthmiddle">The hemoglobin level for men should be 14-17 g, and for women it should be 12-14 g.</li>
      </ul>
      </div>

      <div>
       <h1 className="whydonate">Why should we donate?</h1>
      <ul>
        <li className="firstend">Giving blood is 100% safe.</li>
        <li className="secondend">Your donation is the best gift you can give to anyone.</li>
        <li className="thirdend">it also helps for you to reducethe risk of heart diseases, cancer and more.</li>
        <li className="forthend">your donation will help save the life of up to 3 people.</li>
        <li className="fifthend">every 3 seconds, someone needs blood transfusion.</li>
        <li className="sixthend">when you donate you burn your calories.</li> 
      </ul>
      <img className="imgend" src={imgend}  width="300" height="200" />
      </div> 



      </div>



  );
}


