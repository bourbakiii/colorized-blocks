import React, {FC, memo} from "react";
import {IBlock} from "../types/types";

const Block: FC<IBlock> = (block) => {
    return (
        <div className={`block-wrapper animate-expanded `}>
            <div
                style={{background: block.color}}
                className={` w-[20vw] h-[20vw] rounded-xl ${block.isRemoving ? 'animate-removing' : ''}`}>
            </div>
        </div>
    );
};

export const MemoizedBlock = memo(Block);