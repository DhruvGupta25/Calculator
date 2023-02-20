import { addItemToStorage } from "@/utils/storage";
import { useState } from "react";
import ButtonGroup from "./buttongroup";
import classes from "./calculator.module.css";

function Calculator() {
  const [inputData, setInputdata] = useState("");

  function clickHandler(e) {
    const text = e.target.innerText;
    setInputdata(`${inputData + text}`);
  }
  function clearHandler() {
    setInputdata("");
  }
  function evaluate() {
    try {
      const resultnum = eval(inputData);
      const result = resultnum.toString();
      if (result == "Infinity") {
        throw Error({ message: "Invalid Data" });
      }
      addItemToStorage("expressions", inputData, result, true);
      setInputdata(result);
    } catch (e) {
      alert("Invalid Input");
      addItemToStorage("expressions", inputData, "Not Defined", false);
      setInputdata("");
    }
  }
  function changeHandler() {
    console.log(inputData);
  }

  return (
    <div className={classes.calculator}>
      <div className={classes.screen}>
        <input
          className={classes.input}
          type="text"
          value={inputData}
          onChange={changeHandler}
        />
      </div>
      <div className={classes.buttons}>
        <ButtonGroup
          array={[7, 8, 9, "/"]}
          onClick={clickHandler}
          onEvaluate={evaluate}
          onClear={clearHandler}
        />
        <ButtonGroup
          array={[4, 5, 6, "*"]}
          onClick={clickHandler}
          onEvaluate={evaluate}
          onClear={clearHandler}
        />
        <ButtonGroup
          array={[1, 2, 3, "-"]}
          onClick={clickHandler}
          onEvaluate={evaluate}
          onClear={clearHandler}
        />
        <ButtonGroup
          array={["C", 0, "=", "+"]}
          onClick={clickHandler}
          onEvaluate={evaluate}
          last="true"
          onClear={clearHandler}
        />
      </div>
    </div>
  );
}
export default Calculator;
