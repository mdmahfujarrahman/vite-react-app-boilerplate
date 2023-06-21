import { createAsyncThunk } from "@reduxjs/toolkit";
import SewzeeService from "../../../services/hilokeService";

export const loginSewzeeThunk = createAsyncThunk(
    "hiloke/login",
    async (payload, thunkAPI) => {
        const res = await SewzeeService.loginSewzeeAdminReq({
            email: payload.email,
            password: payload.password,
        })
            .then((res) => {
                return thunkAPI.fulfillWithValue(res.data);
            })
            .catch((error) => {
                return thunkAPI.rejectWithValue(error);
            });
        return res;
    }
);