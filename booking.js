import "./booking.css";
import hospital from "./images/hospital.jpg";
import { Link } from "react-router-dom";


export default function Booking() {
  return (
    <div className="App">

      

     
      


      <div className="title">
        <h4> you are now on your final stage to save lives!</h4>
      </div>

      <div className="FN">
        • First Name
        <input type="text1" />
      </div>

      <div className="LN">
        • Last Name
        <input type="text1" />
      </div>

      <div className="email">
        • Enter Your Email
        <input type="text" />
      </div>

      <div className="phone">
        • Phone Number
        <input type="text2" />
      </div>

      <div className="date">
        <label for="birthday"> • choose a day </label>
        <input type="date" id="choose a day" name="Choose a day" />
        <input type="submit" />
      </div>

      <div className="time">
        • pick an Hour
        <input type="time" />
        <input type="submit" />
      </div>

      <div className="finally">
        <h4> YOU DID THAT!</h4>
      </div>
    </div>
  );
}
