import "./verify.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
       
      <div className="title">
        <h5>
          {" "}
          If you want to be a permanent blood donor, please answer the following
          questions:
        </h5>
      </div>

      <div className="one">
        <h6> • Age : Are you between 18 - 60 ?</h6>
        <input type="radio" name="yes-no" />
        <label>YES</label>
        <br></br>
        <input type="radio" name="yes-no" />
        <label>NO</label>
      </div>

      <div className="two">
        <h6>• Weight: Do you weigh more than 55 kg?</h6>
        <input type="radio" name="yes-no2" />
        <label>YES</label>
        <br></br>
        <input type="radio" name="yes-no2" />
        <label>NO</label>
      </div>

      <div className="three">
        <h6>• Is your blood percentage higher than 13.5?</h6>
        <input type="radio" name="yes-no3" />
        <label>YES</label>
        <br></br>
        <input type="radio" name="yes-no3" />
        <label>NO</label>
      </div>

      <div className="four">
        <h6>• Have you ever donated blood?</h6>
        <input type="radio" name="yes-no4" />
        <label>YES</label>
        <br></br>
        <input type="radio" name="yes-no4" />
        <label>NO</label>
      </div>

      <div className="six">
        <h6> • Are you currently taking antibiotics?</h6>
        <input type="radio" name="yes-no5" />
        <label>YES</label>
        <br></br>
        <input type="radio" name="yes-no5" />
        <label>NO</label>
      </div>

      <div className="seven">
        <h6>• Have you had a vaccination in the past week?</h6>
        <input type="radio" name="yes-no6" />
        <label>YES</label>
        <br></br>
        <input type="radio" name="yes-no6" />
        <label>NO</label>
      </div>

      <div className="eight">
        <h6>• Have you had surgery in the past 6 months?</h6>
        <input type="radio" name="yes-no7" />
        <label>YES</label>
        <br></br>
        <input type="radio" name="yes-no7" />
        <label>NO</label>
      </div>

      <div className="nine">
        <h6> • Are you pregnant or breastfeeding (for women)?</h6>
        <input type="radio" name="yes-no8" />
        <label>YES</label>
        <br></br>
        <input type="radio" name="yes-no8" />
        <label>NO</label>
      </div>

      <div className="ten">
        <h6>• Have you had a blood transfusion in the past 6 months?</h6>
        <input type="radio" name="yes-no9" />
        <label>YES</label>
        <br></br>
        <input type="radio" name="yes-no9" />
        <label>NO</label>
      </div>

      <button className="button">
      <Link to="/Booking">Booking</Link> 
      </button>
    </div>
  );
}
