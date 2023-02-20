import Table from "@/components/table";
import { clearItemsFromStorage, deleteItemFromStorage } from "@/utils/storage";
import { useEffect, useState } from "react";
import classes from "../styles/Home.module.css";

function History() {
  const [isLoading, setLoading] = useState(false);
  const [expressions, setExpressions] = useState([]);

  function clearHandler() {
    setLoading(true);
    clearItemsFromStorage("expressions");
    setExpressions([]);
    setLoading(false);
  }
  function deleteHandler(id) {
    setLoading(true);
    const items = deleteItemFromStorage(
      "expressions",
      id,
      "deletedexpressions"
    );
    setExpressions(items);
    setLoading(false);
  }
  useEffect(() => {
    const array = JSON.parse(localStorage.getItem("expressions"));
    setExpressions(array);
  }, [isLoading]);

  return isLoading ? (
    <div className={classes.center}>Loading.......</div>
  ) : (
    <div className={classes.center}>
      {expressions && expressions.length? 
      <div className={classes.clear_button_container}>
        <button onClick={() => clearHandler()}>Clear History</button>
      </div>: null
      }
      {expressions && expressions.length ? (
        <Table expressions={expressions} deleteHandler={deleteHandler} />
      ) : (
        <div className={classes.text}>No History Found</div>
      )}
    </div>
  );
}
export default History;
