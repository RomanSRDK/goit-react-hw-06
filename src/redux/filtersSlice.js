import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    findContact: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { findContact } = slice.actions;

export default slice.reducer;

// const filteredContacts = contacts.filter(({ name }) =>
//   name.toLowerCase().startsWith(filter.toLowerCase())
// );
