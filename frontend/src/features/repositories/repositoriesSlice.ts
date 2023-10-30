import {Repository} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {getRepos} from "./repositoriesThunks";
import {RootState} from "../../app/store";

interface RepositoriesState {
    repositories: Repository [];
    loading: boolean
}

const initialState: RepositoriesState = {
    repositories: [],
    loading: false
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
    }
});

export const repositoriesReducer = repositoriesSlice.reducer;

export const selectRepositories = (state: RootState) => state.repositories.repositories;
export const selectRepositoriesLoading = (state: RootState) => state.repositories.loading;