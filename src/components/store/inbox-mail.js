import { createSlice } from "@reduxjs/toolkit";

const InitialInboxMailState = {
  inboxMails: [],
  mailRead: {},
};

const inboxMailSlice = createSlice({
  name: "inboxMailLists",
  initialState: InitialInboxMailState,
  reducers: {
    addInboxMails(state, action) {
      state.inboxMails = action.payload;
    },
    readMail(state, action) {
      state.mailRead = action.payload;
    },
    updateInboxMails(state, action) {
      const existingItemIndex = state.inboxMails.findIndex(
        (prevItem) => prevItem.id === action.payload
      );
      const existingItem = state.inboxMails[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        read: true,
      };
      state.inboxMails[existingItemIndex] = updatedItem;
    },
    deleteInboxMails(state, action) {
      const filteredMails = state.inboxMails.filter(
        (item) => item.id !== action.payload
      );
      state.inboxMails = filteredMails;
    },
  },
});
export const inboxMailActions = inboxMailSlice.actions;
export default inboxMailSlice.reducer;
