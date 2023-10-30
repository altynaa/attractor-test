import {Repository} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {getRepos, getReposByLogin} from "./repositoriesThunks";
import {RootState} from "../../app/store";

interface RepositoriesState {
    repositories: Repository [];
    loading: boolean;
    repositoriesByLogin: Repository[];
    repositoriesByLoginLoading: boolean
}

const initialState: RepositoriesState = {
    repositories: [],
    loading: false,
    repositoriesByLogin: [],
    repositoriesByLoginLoading: false
};

const repositoriesSlice = createSlice({
    name: 'repositories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRepos.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getRepos.fulfilled, (state, {payload: repos}) => {
            state.loading = false;
            state.repositories = repos;
        });
        builder.addCase(getRepos.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(getReposByLogin.pending, (state) => {
            state.repositoriesByLoginLoading = true;
        });
        builder.addCase(getReposByLogin.fulfilled, (state, {payload: repos}) => {
            state.repositoriesByLoginLoading = false;
            state.repositoriesByLogin = repos;
        });
        builder.addCase(getReposByLogin.rejected, (state) => {
            state.repositoriesByLoginLoading = false;
        });
    }
});

export const repositoriesReducer = repositoriesSlice.reducer;

export const selectRepositories = (state: RootState) => state.repositories.repositories;
export const selectRepositoriesLoading = (state: RootState) => state.repositories.loading;
export const selectRepositoriesByLogin = (state: RootState) => state.repositories.repositoriesByLogin;