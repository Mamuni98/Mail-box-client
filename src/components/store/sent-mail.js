import { createSlice } from "@reduxjs/toolkit";

const InitialsentMailState = {
    sentMails:[],
    changed: false,
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
        }
    }
})
export const sentMailActions = sentMailSlice.actions;
export default sentMailSlice.reducer;