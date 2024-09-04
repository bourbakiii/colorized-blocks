import { configureStore } from '@reduxjs/toolkit';
import blocksReducer from '../features/ColorizedBlocks/model/blocksSlice';

export const store = configureStore({
    reducer: {
        blocks: blocksReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
