import {createAsyncThunk} from "@reduxjs/toolkit";
import {GlobalError, Profile, User} from "../../types";
import {isAxiosError} from "axios";
import axiosApi from "../../axiosApi";

export const githubLogin = createAsyncThunk<User, string, {rejectValue: GlobalError}>(
    'users/githubLogin',
    async (code, {rejectWithValue}) => {
        try {
            const response = await axiosApi.post('users/github', {code});
            return response.data;
        } catch (e) {
            if (isAxiosError(e) && e.response && e.response.status === 400) {
                return rejectWithValue(e.response.data as GlobalError);
            }
            throw (e);
        }
    }
);

export const editProfile = createAsyncThunk<void, Profile >(
    'users/editProfile',
    async (profile) => {
        await axiosApi.patch('/users/edit', profile);
    }
);

export const findUsers = createAsyncThunk<string, string>(
    'users/findUsers',
    async (search) => {
        const response = await axiosApi.get('/users/search?q=' + search);
        return response.data;
    }
);