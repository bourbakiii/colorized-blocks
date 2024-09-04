import React, {FC, FormHTMLAttributes, memo} from 'react';
import {Button} from "../../../shared/ui/Button";

export interface IControlsProps extends FormHTMLAttributes<HTMLFormElement> {
    onAdd: () => void;
    onDelete: () => void;
}

export const Controls: FC<IControlsProps> = ({onAdd, onDelete, ...rest}) => {
    return (
        <form className={`flex gap-1 ${rest.className || ''}`}>
            <Button className={'w-[200px]'} type={'button'} onClick={onAdd}>Добавить в лист</Button>
            <Button className={'w-[200px]'} type={'button'} onClick={onDelete}>Удалить из листа</Button>
        </form>
    );
};
export const MemoizedControls = memo(Controls);