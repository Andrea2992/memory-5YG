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
            if (state.value >= 20) {
                state.value = state.value - 20;
            } else {
                state.value = 0;
            }
        },
        newGameScore: (state) => {
            state.value = 0;
        }
    },
})

export const { increaseScore, decreaseScore, newGameScore } = score.actions;
export default score.reducer;
