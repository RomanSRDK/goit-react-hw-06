import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <Contact
            name={name}
            number={number}
            deleteContact={() => deleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
