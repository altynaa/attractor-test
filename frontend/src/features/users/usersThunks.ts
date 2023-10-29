import {createAsyncThunk} from "@reduxjs/toolkit";
import {isAxiosError} from "axios";
import {GlobalError} from "../../types";
import axiosApi from "../../axiosApi";

export const githubLogin = createAsyncThunk<string, string, {rejectValue: GlobalError}>(
    'users/githubLogin',
    async (code, {rejectWithValue}) => {
        try {
            console.log('in thunk')
            const response = await axiosApi.post('users/github', {code});
            console.log(response);
            return response.data;
        } catch (e) {
            if (isAxiosError(e) && e.response && e.response.status === 400) {
                return rejectWithValue(e.response.data as GlobalError);
            }
            throw (e);
        }
    }
);