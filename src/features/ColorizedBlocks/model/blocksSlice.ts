import {createSlice} from '@reduxjs/toolkit';
import {IBlock} from "../types/types";
import {getRandomColor, getUId} from "../lib/helpers";

interface BlocksState {
    blocks: IBlock[];
    countRemovings: number;
}

const initialState: BlocksState = {
    blocks: [{id: getUId(), color: getRandomColor()}],
    countRemovings: 0,
};

export const blocksSlice = createSlice({
    name: 'blocks',
    initialState,
    reducers: {
        addBlock: (state) => {
            state.blocks.unshift({
                id: getUId(),
                color: getRandomColor(),
            });
        },
        initiateRemoveBlock: (state) => {
            if (state.blocks.length <= state.countRemovings) return;
            state.countRemovings++;
            const lastBlock = state.blocks[state.blocks.length - state.countRemovings];
            if (lastBlock) {
                lastBlock.isRemoving = true;
            }
        },
        finalizeRemoveBlock: (state) => {
            if (state.countRemovings > 0) {
                state.blocks.pop();
                state.countRemovings--;
            }
        },
    },
});

export const {addBlock, initiateRemoveBlock, finalizeRemoveBlock} = blocksSlice.actions;
export default blocksSlice.reducer;
