import {createAsyncThunk} from "@reduxjs/toolkit";
import {GlobalError, User} from "../../types";
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