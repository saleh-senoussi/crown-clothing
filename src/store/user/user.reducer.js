import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    currentUser: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload; // still generates a new object, not mutating object. createSlice allows to write mutation like code 
        }
    }
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;