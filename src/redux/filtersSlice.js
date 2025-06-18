import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: { findContact: (state, action) => {} },
});
