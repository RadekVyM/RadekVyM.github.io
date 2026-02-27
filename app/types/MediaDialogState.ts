import { DialogState } from "./DialogState";
import { MediaItem } from "./MediaItem";

export type MediaDialogState = {
    items: ReadonlyArray<MediaItem>,
    currentItem: MediaItem,
    setCurrentItem: (className: string) => void,
} & DialogState