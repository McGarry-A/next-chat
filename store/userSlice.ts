import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store"

interface initialStateInterface {
    email: string;
    image: string;
    name: string;
}

const initialState: initialStateInterface = {
    email: "",
    image: "",
    name: ""
} 

export const currentUserSlice = createSlice({
    name: "CurrentUser",
    initialState: initialState,
    reducers: {}
})
