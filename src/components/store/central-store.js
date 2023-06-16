import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth";
import SentMailReducer from "./sent-mail";
import InboxMailReducer from "./inbox-mail";
const store = configureStore({
  reducer: {
    auth: AuthReducer,
    sentMail: SentMailReducer,
    inboxMail: InboxMailReducer,
  },
});

export default store;
