import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
