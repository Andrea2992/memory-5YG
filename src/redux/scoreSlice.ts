import { createSlice } from '@reduxjs/toolkit'

export const score = createSlice({
    name: 'gameStateText',
    initialState: {
        value: 0
    },
    reducers: {
        increaseScore: (state) => {
            state.value = state.value + 50;
        },
        decreaseScore: (state) => {
                state.value = state.value - 15;
        },
        newGameScore: (state) => {
            state.value = 0;
        }
    },
})

export const { increaseScore, decreaseScore, newGameScore } = score.actions;
export default score.reducer;
