import { createSlice } from '@reduxjs/toolkit'

export const gameStatusText = createSlice({
    name: 'gameStatusText',
    initialState: {
        hint: 'CHOOSE ONE CARD',
        message: 'STARTED NEW GAME!'
    },
    reducers: {
        updateText: (state, action) => {
            state.hint = action.payload.hint.toUpperCase();
            state.message = action.payload.message.toUpperCase();
        },
    },
})

export const { updateText } = gameStatusText.actions;
export default gameStatusText.reducer;