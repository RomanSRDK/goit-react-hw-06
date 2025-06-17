import { useId } from "react";
import styles from "./SearchBox.module.css";

function SearchBox({ handleChangeFilter }) {
  const id = useId();

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        onChange={(evt) => handleChangeFilter(evt.target.value)}
        className={styles.input}
        type="text"
        id={id}
      />
    </div>
  );
}

export default SearchBox;
