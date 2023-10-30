import {createAsyncThunk} from "@reduxjs/toolkit";
import {GlobalError, Repository} from "../../types";
import axiosApi from "../../axiosApi";
import {isAxiosError} from "axios";

export const getRepos = createAsyncThunk<Repository[], string, { rejectValue: GlobalError }>(
    'repositories/getRepos',
    async (token, {rejectWithValue}) => {
        try {
            const response = await axiosApi.post('repositories/fetch', {token});
            return response.data;
        } catch (e) {
            if (isAxiosError(e) && e.response && e.response.status === 400) {
                return rejectWithValue(e.response.data as GlobalError);
            }
            throw (e);
        }
    }
);


export const getReposByLogin = createAsyncThunk<Repository[], string>(
    'repositories/getReposByLogin',
    async (params) => {
        const response = await axiosApi.get('repositories/fetchByLogin?q=' + params);
        return response.data;
    }
)