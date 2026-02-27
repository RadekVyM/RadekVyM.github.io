"use client";

import { MediaDialogState } from "../types/MediaDialogState";
import { Dialog } from "./Dialog";
import ImagePreview from "./ImagePreview";
import "./MediaDialog.css";

export default function MediaDialog(props: {
    state: MediaDialogState,
}) {
    return (
        <Dialog
            ref={props.state.dialogRef}
            state={props.state}
            className="media-dialog">
            {props.state.currentItem.type === "image" &&
                <ImagePreview
                    className="image-preview"
                    source={props.state.currentItem.source}
                    darkSource={props.state.currentItem.darkSource}
                    alt={props.state.currentItem.alt} />}
        </Dialog>
    );
}