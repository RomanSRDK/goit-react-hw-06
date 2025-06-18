import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  // const initialState = [
  //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ];

  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("contacts")) || initialState
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [defaultFilterValue, setDefaultFilterValue] = useState("");

  const addContact = ({ name, number }) => {
    const formattedName = name
      .toLowerCase()
      .split("")
      .map((char, index) => (index === 0 ? char.toUpperCase() : char))
      .join("");
    const formattedNumber = number.replace(/(\d{3})(\d{2})(\d{2})/, "$1-$2-$3");

    setContacts([
      ...contacts,
      { name: formattedName, number: formattedNumber, id: nanoid() },
    ]);
  };

  const deleteContact = (id) =>
    setContacts(contacts.filter((contact) => contact.id !== id));

  const handleChangeFilter = (value) => {
    setDefaultFilterValue(value);
  };

  const filteredContacts = contacts.filter(({ name }) =>
    // чтобы фильтр работал только по началу имени вместо метода includes() стоит использовать метод startsWith()
    name.toLowerCase().startsWith(defaultFilterValue.trim().toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox handleChangeFilter={handleChangeFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </>
  );
}

export default App;
