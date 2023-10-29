import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {User} from "../../types";
import {githubLogin} from "./usersThunks";

interface UsersState {
    user: User | null;
    loginLoading: boolean
}

const initialState: UsersState = {
    user: null,
    loginLoading: false
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(githubLogin.pending, (state) => {
            state.loginLoading = true;
        });
        builder.addCase(githubLogin.fulfilled, (state, {payload: userInfo}) => {
            state.loginLoading = false;
            state.user = userInfo;
        });
        builder.addCase(githubLogin.rejected, (state) => {
            state.loginLoading = false;
        });
    }
});

export const usersReducer = usersSlice.reducer;

export const selectUser = (state: RootState) => state.users.user;
export const selectLoginLoading = (state: RootState) => state.users.loginLoading;

