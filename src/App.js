import React from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [height, setHeight] = useState(); // this hook reads height input in the field and store it in the height variable.
  const [weight, setWeight] = useState(); // it reads weight input from the field and stores it.
  const [bmi, setBmi] = useState(); //

  const heightHandler = (event) => {
    // this is onChange attribute function of height field it reads the input of height field and store it in height usestate hook
    // console.log(event.target.value);
    setHeight(event.target.value);
  };

  const weightHandler = (event) => {
    // this is onchange attribute function of weight field it reads the input of weight field and store it in weight usestate hook
    // console.log(event.target.value);
    setWeight(event.target.value);
  };

  const calcBtn = () => {
    // this is the onClick attribute of calcuation button, it calculates the bmi by storing the square of height in a variable and dividing it by weight of the person
    // console.log(height);
    // console.log(weight);
    const squareOfHeight = height * height;
    // console.log(squareOfHeight);
    const actualBMI = weight / squareOfHeight;
    // console.log(actualBMI);
    const shortValue = actualBMI.toFixed(2); // to fixed(2) shotes the result and show only first 2 values
    setBmi(shortValue); // took first 2 value of the result and stored in a variable and passed it to setbmi.
  };
  const resetHandle = () => {
    // onClick attribute of reset button, it resets the the values in the field
    setHeight("");
    setWeight("");
    // if(height && weight == null){
    //   return function alreadyEmpty(){
    //     <h1>Field Already Empty</h1>
    //   }
    // }
  };
  //   const yourCondition = () => {
  // if(bmi<18.5){
  //  const condition = 'UnderWeight';
  // }
  // else if(bmi>18.5 && bmi<24){
  // const condition = 'Normal';
  // }
  // else if(bmi>25 && bmi<29.9){
  //  const condition = 'Over Weight';
  // }
  // else if(bmi>30) {
  //  const condition = 'Obese';
  // }
  // else{
  //  const condition = null;
  // }
  //   }

  // whole complete funtion
  // function fullFunc (props){
  //   return (
  //     {if(props.bmi < 18.5 ){
  //       return <h1>underweight</h1>
  //     }}
  //   )
  // }

  // function FuncNormal() {
  //   return (
  //     <h1 style={{ color: "#2ECC71", fontWeight: "700", fontSize: "2rem" }}>
  //       Normal
  //     </h1>
  //   );
  // }
  // function FuncUnderweight() {
  //   return (
  //     <h1 style={{ color: "#F1C40F", fontWeight: "700", fontSize: "2rem" }}>
  //       Underweight
  //     </h1>
  //   );
  // }
  // function FuncOverweight() {
  //   return (
  //     <h1 style={{ color: "#CB4335", fontWeight: "700", fontSize: "2rem" }}>
  //       Overweight
  //     </h1>
  //   );
  // }
  // function FuncObese() {
  //   return (
  //     <h1 style={{ color: "#2C3E50", fontWeight: "700", fontSize: "2rem" }}>
  //       Obese
  //     </h1>
  //   );
  // }

  // const Completefunc = () => {
  //   if ((bmi = null)) return null;
  //   else if (bmi < 18.5) {
  //     return function FuncUnderweight() {
  //       return (
  //         <h1 style={{ color: "#F1C40F", fontWeight: "700", fontSize: "2rem" }}>
  //           Underweight
  //         </h1>
  //       );
  //     };
  //   } else if (bmi > 18.5 && bmi < 24) {
  //     return function FuncNormal() {
  //       return (
  //         <h1 style={{ color: "#2ECC71", fontWeight: "700", fontSize: "2rem" }}>
  //           Normal
  //         </h1>
  //       );
  //     };
  //   } else if (bmi > 24 && bmi < 30) {
  //     return function FuncOverweight() {
  //       return (
  //         <h1 style={{ color: "#CB4335", fontWeight: "700", fontSize: "2rem" }}>
  //           Overweight
  //         </h1>
  //       );
  //     };
  //   } else if (bmi > 30) {
  //     return function FuncObese() {
  //       return (
  //         <h1 style={{ color: "#2C3E50", fontWeight: "700", fontSize: "2rem" }}>
  //           Obese
  //         </h1>
  //       );
  //     };
  //   }
  // };

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
        <div className="buttons">
          {/* calculate button  */}
          <button onClick={calcBtn} className="cal-btn button">
            Calculate
          </button>

          {/* reset button  */}
          <button className=" reset-btn button" onClick={resetHandle}>
            Reset
          </button>
        </div>
        <span className="bmi-output">Your BMI is: {bmi} </span>
      </div>

      <div className="whole-list">
        <h2 className="list-heading">Common feet to meter conversions:</h2>
        <ol className="list">
          <li>5 feet 1 inches = 1.5494 m</li>
          <li>5 feet 2 inches = 1.5748 m</li>
          <li>5 feet 3 inches = 1.6002 m</li>
          <li>5 feet 4 inches = 1.6256 m</li>
          <li>5 feet 5 inches = 1.651 m</li>
          <li>5 feet 6 inches = 1.6764 m</li>
          <li>5 feet 7 inches = 1.7018 m</li>
          <li>5 feet 8 inches = 1.7272 m</li>
          <li>5 feet 9 inches = 1.7526 m</li>
          <li>5 feet 10 inches = 1.778 m</li>
          <li>5 feet 11 inches = 1.8034 m</li>
          <li>6 feet 0 inches = 1.8288 m</li>
          <li>6 feet 1 inches = 1.8542 m</li>
          <li>6 feet 2 inches = 1.8796 m</li>
        </ol>
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
