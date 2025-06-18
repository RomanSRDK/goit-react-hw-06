import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

// const persistConfig = {
//   key: "contacts",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };
