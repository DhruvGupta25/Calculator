import classes from "./button.module.css";
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
  ) : (
    <div
      className={props.last ? classes.last_button : classes.button}
      onClick={props.onClick}
    >
      {props.text}
    </div>
  );
}
export default Button;
