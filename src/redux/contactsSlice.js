import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  //   Властивість name визначає ім'я слайсу, яке додаватиметься як приставка під час створення екшенів, оголошених у властивості reducers. Так ми отримаємо екшени з типами contacts/addContact та contacts/deleteContact
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },

  //   У властивості reducers оголошуються case-редюсери - функції, які визначають, як змінювати стан слайсу у відповідь на певний екшен (action). Кожен case-редюсер відповідає за один конкретний екшен і змінює стан.
  //   action: reducer () => {}
  reducers: {
    addContact: (state, action) => {
      return state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      return state.items.filter((contact) => contact.id !== action.payload.id);
    },
  },
});

// Експортуємо фабрики екшенів
export const { addContact, deleteContact } = slice.actions;
// Експортуємо редюсер слайсу
export default slice.reducer;
