import { createSlice } from "@reduxjs/toolkit";

const InitialInboxMailState = {
    inboxMails:[],
}

const inboxMailSlice = createSlice({
    name:"inboxMailLists",
    initialState: InitialInboxMailState,
    reducers:{
        addInboxMails(state,action){
            state.inboxMails = action.payload;
        }
    }
})
export const inboxMailActions = inboxMailSlice.actions;
export default inboxMailSlice.reducer;