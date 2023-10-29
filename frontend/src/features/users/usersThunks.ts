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
        const formData = new FormData();
        const keys = Object.keys(profile) as (keyof Profile)[];
        keys.forEach(key => {
            const value = profile[key];

            if (value != null) {
                formData.append(key, value);
            }
        })

        await axiosApi.patch('/users/edit', formData);
    }
)