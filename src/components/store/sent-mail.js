import { createSlice } from "@reduxjs/toolkit";

const InitialsentMailState = {
    sentMails:[],
    changed: false,
    mailRead:{},

}
const sentMailSlice = createSlice({
    name:"sentMailsList",
    initialState: InitialsentMailState,
    reducers:{
        addMail(state,action){
            state.sentMails.push(action.payload);
            state.changed = true;
        },
        finalSentMailList(state,action){
            state.sentMails = action.payload;
            state.changed = false;
        },
        updateReadMail(state, action){
            const existingItemIndex = state.sentMails.findIndex(
                (prevItem) => prevItem.id === action.payload.id
              );
              const existingItem = state.sentMails[existingItemIndex];
              const updatedItem = {
                ...existingItem,
                read: true,
              };
              state.sentMails[existingItemIndex] = updatedItem;
              state.mailRead = action.payload;
              state.changed = true;
        }
    }
})
export const sentMailActions = sentMailSlice.actions;
export default sentMailSlice.reducer;