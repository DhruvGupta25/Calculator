import classes from "./button.module.css";
import {FiDelete} from 'react-icons/fi';
function Button(props) {
  return props.text === "C" ? (
    <div
      className={props.last ? classes.last_button : classes.button}
      onClick={props.onClear}
    >
      {props.text}
    </div>
  ) : props.text === "=" ? (
    <div
      className={props.last ? classes.last_button : classes.button}
      onClick={props.onEvaluate}
    >
      {props.text}
    </div>
  ) : props.text === "X" ?(
      <div
      className={props.last ? classes.last_button : classes.button}
      onClick={props.onDelete}
      >
       <FiDelete/>
      </div>  
    )
    :(
    <div
      className={props.last ? classes.last_button : classes.button}
      onClick={props.onClick}
    >
      {props.text}
    </div>
  );
}
export default Button;
