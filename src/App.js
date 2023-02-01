import React from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState();

  const heightHandler = (event) => {
    // console.log(event.target.value);
    setHeight(event.target.value);
  };

  const weightHandler = (event) => {
    // console.log(event.target.value);
    setWeight(event.target.value);
  };

  const calcBtn = () => {
    console.log(height);
    console.log(weight);
  };

  return (
    <div className="whole-page">
      {/* heading */}
      <h1 className="heading">BMI Calculator</h1>

      {/* bmi calculation area  */}
      <div className="bmi-calculation-area">
        <h2 className="heading-3">Calculate Your BMI:</h2>

        <div className="whole-input-area">
          {/* height input in Meters */}
          <span className="height-heading">Height (Meters)</span>
          <input
            className="height-input"
            onChange={heightHandler}
            type="number"
            placeholder="Meter"
            value={height}
          />

          {/* weight input in kg's  */}
          <span className="weight-heading">Weight (KGs) </span>
          <input
            className="weight-input"
            onChange={weightHandler}
            type="text"
            placeholder="kilograms"
            value={weight}
          />
        </div>

        <br />
        {/* calculate button  */}
        <button onClick={calcBtn} className="cal-btn">
          Calculate
        </button>

        <span className="bmi-output">Your BMI is: </span>
      </div>

      {/* about mbi calculator  */}
      <div className="about-bmi">
        <h2 className="heading-2">What is BMI ?</h2>
        <p className="paragraph">
          Body <span className="bmi-letter">M</span>ass{" "}
          <span className="bmi-letter">I</span>ndex (BMI) is a person's weight
          in kilograms (or pounds) divided by the square of height in meters (or
          feet). A high BMI can indicate high body fatness. BMI screens for
          weight categories that may lead to health problems, but it does not
          diagnose the body fatness or health of an individual
          <br />
          BMI in an individual is calculated by the use of a mathematical
          formula. It can also be estimated using tables in which one can match
          height in inches to weight in pounds to estimate BMI. There are
          convenient calculators available on internet sites that help calculate
          BMI as well. The formula is - BMI = (Weight in kilograms) divided by
          (Height in metres squared) A normal BMI score is one that falls
          between 18.5 and 24.9. This indicates that a person is within the
          normal weight range for his or her height. A BMI chart is used to
          categorize a person as underweight, normal, overweight, or obese.
        </p>
      </div>

      {/* overview list  */}
      <div>
        <h2 className="overview-heading">Over-View:</h2>
        <ul className="overview-list-complete">
          <li>
            {" "}
            <span className="weight-type">Underweight</span> - BMI less than
            18.5
          </li>

          <li>
            {" "}
            <span className="weight-type">Normal Weight</span> - BMI between
            18.5 and 24
          </li>

          <li>
            {" "}
            <span className="weight-type">Overweight</span> - BMI between 25 and
            29.9
          </li>

          <li>
            {" "}
            <span className="weight-type">Obese</span> - BMI above 30
          </li>
        </ul>
      </div>
    </div>
  );
}
