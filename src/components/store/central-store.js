import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth";
import SentMailReducer from "./sent-mail";
import InboxMailReducer from "./inbox-mail";
import RecycleBinReducer from "./recycle-bin";
const store = configureStore({
  reducer: {
    auth: AuthReducer,
    sentMail: SentMailReducer,
    inboxMail: InboxMailReducer,
    recycleBin: RecycleBinReducer,
  },
});

export default store;
