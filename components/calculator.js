import {
  isOperator,
  isOperatorBinary,
  addItemToStorage,
} from "@/utils/storage";
import { useState } from "react";
import ButtonGroup from "./buttongroup";
import classes from "./calculator.module.css";

function Calculator() {
  const [inputData, setInputdata] = useState("");

  function deleteHandler() {
    if (inputData.length) {
      const string = inputData.substring(0, inputData.length - 1);
      setInputdata(string);
    }
  }
  function clickHandler(e) {
    const text = e.target.innerText;
    const length = inputData.length;
    if (inputData === "Expression Invalid") {
      if (isOperatorBinary(text)) {
        setInputdata("");
      } else setInputdata(`${text}`);
    } else if (
      (!length ||
        (length === 1 &&
          isOperator(inputData[inputData.length - 1]) &&
          !isOperatorBinary(inputData[inputData.length - 1]))) &&
      isOperatorBinary(text)
    ) {
      //
    } else if (
      length &&
      isOperator(inputData[length - 1]) &&
      isOperator(text)
    ) {
      const string = inputData.substring(0, length - 1);
      setInputdata(string + text);
    } else setInputdata(`${inputData + text}`);
  }
  function clearHandler() {
    setInputdata("");
  }
  function evaluate() {
    if (inputData.length && isOperator(inputData[inputData.length - 1])) {
      //
    } else {
      let string = "";
      let expression = "";
      for (let i = 0; i < inputData.length; i++) {
        if (isOperator(inputData[i])) {
          if (i == 0) {
            string += inputData[i];
          } else {
            
            expression += Number(string);
            expression += inputData[i];
            string = "";
          }
        } else {
          string += inputData[i];
        }
      }
      if (string) {
        expression += Number(string);
      }
      let evaluate = eval(expression);
      evaluate.toFixed(3);
      evaluate = String(evaluate);

      if (evaluate === "Infinity" || evaluate === "NaN") {
        evaluate = "Expression Invalid";
      }
      addItemToStorage("expressions", inputData, evaluate);
      setInputdata(evaluate);
    }
  }
  function changeHandler() {
    //
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
          array={["%", "X", "C", "/"]}
          onClick={clickHandler}
          onEvaluate={evaluate}
          onClear={clearHandler}
          onDelete={deleteHandler}
        />
        <ButtonGroup
          array={[7, 8, 9, "*"]}
          onClick={clickHandler}
          onEvaluate={evaluate}
          onClear={clearHandler}
          onDelete={deleteHandler}
        />
        <ButtonGroup
          array={[4, 5, 6, "-"]}
          onClick={clickHandler}
          onEvaluate={evaluate}
          onClear={clearHandler}
          onDelete={deleteHandler}
        />
        <ButtonGroup
          array={[1, 2, 3, "+"]}
          onClick={clickHandler}
          onEvaluate={evaluate}
          onClear={clearHandler}
          onDelete={deleteHandler}
        />
        <ButtonGroup
          array={["00", 0, ".", "="]}
          onClick={clickHandler}
          onEvaluate={evaluate}
          last="true"
          onClear={clearHandler}
          onDelete={deleteHandler}
        />
      </div>
    </div>
  );
}
export default Calculator;
