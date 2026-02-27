"use client";

import { useState } from "react";
import { MediaDialogState } from "../types/MediaDialogState";
import { MediaItem } from "../types/MediaItem";
import useDialog from "./useDialogState";

export default function useMediaDialogState(items: ReadonlyArray<MediaItem>): MediaDialogState {
    const dialogState = useDialog();
    const [currentItem, setCurrentItem] = useState<MediaItem>(items[0]);

    function setCurrentItemFromClass(className: string) {
        const item = items.find((item) => item.className === className);

        if (item) {
            setCurrentItem(item);
        }
    }

    return {
        ...dialogState,
        items,
        currentItem,
        setCurrentItem: setCurrentItemFromClass,
    };
}