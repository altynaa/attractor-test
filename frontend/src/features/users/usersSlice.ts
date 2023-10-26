import {createSlice} from "@reduxjs/toolkit";

interface UsersState {
    user:  null;
    loginLoading: boolean;
    loginError:  null;
}

const initialState: UsersState = {
    user: null,
    loginLoading: false,
    loginError: null
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        unsetUser: (state) => {
            state.user = null;
        }
    },
    extraReducers: () => {}
});

export const usersReducer = usersSlice.reducer;

export const {unsetUser} = usersSlice.actions;
