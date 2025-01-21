import react from "react";
import "./section1.css";
import DropDown from "./Image/DropDown.png";

const Section1 = () => {
  return (
    <div className="section1">
      <div className="main-contant">
        <div className="find-Box">
          <a>Find your right car</a>
          <div className="buttens">
            <div className="button">
              <button className="b-1">New Car</button>
            </div>
            <div className="button">
              <button className="b-2">Used Car</button>
            </div>
          </div>
          <div className="radio-button">
            <div className="r-b">
              <input type="radio" name="by" id="" />
              <label htmlFor="">By Budget</label>
            </div>
            <div className="r-b">
              <input type="radio" name="by" id="" />
              <label htmlFor="">By Brand</label>
            </div>
          </div>
          <div className="search-inputs">
            <input type="search" placeholder="Select Budget" class="i-1" />
            <input type="search" placeholder="All Vehicle Types" class="i-2" />
          </div>
          <div className="Search-button">
            <button>Search</button>
          </div>
          <div className="advance">Advanced Search &gt;</div>
        </div>
        <div className="hover-boxs">
          <div className="box">
            <div className="ad">ad</div>
            Sagar Motors
          </div>
          <div className="box">
            <div className="ad">ad</div>
            Sagar Motors
          </div>
          <div className="box">Kia Syros</div>
          <div className="box">2024 Honda Amaze</div>
          <div className="box">
            skoda Kylaq
            <br />
            Launched
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section1;
