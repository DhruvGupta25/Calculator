import Row from "./row";
import classes from "./table.module.css";

function Table(props) {
  const { expressions, deleteHandler } = props;
  return (
    <table className={classes.table}>
      <tbody className={classes.table_body}>
        <tr className={classes.header}>
          <th>S.NO</th>
          <th>Expression</th>
          <th>Result</th>
          <th>Delete</th>
        </tr>
        {expressions ? (
          expressions.map((expression, i) => {
            return (
              <Row
                index={i + 1}
                key={i + 1}
                id={expression.id}
                text={expression.text}
                output={expression.result}
                ondelete={deleteHandler}
              />
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    </table>
  );
}
export default Table;
