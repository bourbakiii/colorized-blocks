import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "../../../app/store";
import {addBlock, finalizeRemoveBlock, initiateRemoveBlock} from "../model/blocksSlice";
import {MemoizedControls} from "./Controls";
import {MemoizedBlock} from "./Block";

export const ColorizedBlocks = () => {
    const dispatch = useDispatch();
    const blocks = useSelector((state: RootState) => state.blocks.blocks);

    const addBlockHandler = useCallback(() => void dispatch(addBlock()), [dispatch]);

    const removeBlockHandler = useCallback(() => {
        dispatch(initiateRemoveBlock());
        setTimeout(() => dispatch(finalizeRemoveBlock()), 1000);
    }, [dispatch]);

    return (
        <div className="flex flex-col gap-4 p-10">
            <MemoizedControls className='self-center' onAdd={addBlockHandler} onDelete={removeBlockHandler}/>
            <div className="bg-gray-300 flex gap-2 px-20 py-10 rounded-xl box-content h-[20vw] overflow-x-auto">
                {blocks.map((block) => <MemoizedBlock key={block.id} {...block}/>)}
            </div>
        </div>
    );
}