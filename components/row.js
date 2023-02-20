import classes from "./row.module.css";
import { MdDelete } from "react-icons/md";

function Row(props) {
  const num = +props.output;
  const output = num.toFixed(3);
  return (
    <tr className={classes.row}>
      <td>{props.index}</td>
      <td>{props.text}</td>
      <td>{output}</td>
      <td>
        <button
          className={classes.delete}
          onClick={() => props.ondelete(props.id)}
        >
          <span className={classes.logo}>
            <MdDelete />
          </span>
          <span>Delete</span>
        </button>
      </td>
    </tr>
  );
}
export default Row;
