import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {User} from "../../types";
import {findUsers, githubLogin} from "./usersThunks";

interface UsersState {
    user: User | null;
    loginLoading: boolean;
    searchResult: string;
    searching: boolean;
}

const initialState: UsersState = {
    user: null,
    loginLoading: false,
    searchResult: '',
    searching: false
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

        builder.addCase(findUsers.pending, (state) => {
            state.searching = true;
        });
        builder.addCase(findUsers.fulfilled, (state, {payload: result}) => {
            state.searching = false;
            state.searchResult = result;
            console.log(state.searchResult);
        });
        builder.addCase(findUsers.rejected, (state) => {
            state.searching = false;
        });
    }
});

export const usersReducer = usersSlice.reducer;

export const selectUser = (state: RootState) => state.users.user;
export const selectLoginLoading = (state: RootState) => state.users.loginLoading;
export const selectSearchResult = (state: RootState) => state.users.searchResult;
export const selectSearching = (state: RootState) => state.users.searching;

