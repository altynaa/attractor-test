import {createSlice} from "@reduxjs/toolkit";

interface UsersState {
    user: null;
}

const initialState: UsersState = {
    user: null,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const usersReducer = usersSlice.reducer;

