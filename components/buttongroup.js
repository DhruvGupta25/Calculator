import Button from "./button";
import classes from "./buttongroup.module.css";
function ButtonGroup(props) {
  const { array } = props;
  return (
    <div className={classes.group}>
      <Button
        onClick={props.onClick}
        onClear={props.onClear}
        onEvaluate={props.onEvaluate}
        onDelete={props.onDelete}
        text={array[0]}
      />
      <Button
        onClick={props.onClick}
        onClear={props.onClear}
        onEvaluate={props.onEvaluate}
        onDelete={props.onDelete}
        text={array[1]}
      />
      <Button
        onClick={props.onClick}
        onClear={props.onClear}
        onEvaluate={props.onEvaluate}
        onDelete={props.onDelete}
        text={array[2]}
      />
      <Button
        onClick={props.onClick}
        onClear={props.onClear}
        onEvaluate={props.onEvaluate}
        onDelete={props.onDelete}
        last="1"
        text={array[3]}
      />
    </div>
  );
}
export default ButtonGroup;
