// src/features/appSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
    selectedOption: string;
    discountCode: string;
    notes: string;
}

const initialState: AppState = {
    selectedOption: '',
    discountCode: '',
    notes: ''
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSelectedOption: (state, action: PayloadAction<string>) => {
            state.selectedOption = action.payload;
        },
        setDiscountCode: (state, action: PayloadAction<string>) => {
            state.discountCode = action.payload;
        },
        setNotes: (state, action: PayloadAction<string>) => {
            state.notes = action.payload;
        }
    }
});

export const { setSelectedOption, setDiscountCode, setNotes } = appSlice.actions;
export default appSlice.reducer;
