"use client";

import { createPortal } from "react-dom";
import { DialogState } from "../types/DialogState";
import "./Dialog.css";

export type DialogProps = {
    state: DialogState,
    children?: React.ReactNode,
    className?: string,
    outerClassName?: string,
    onEscape?: () => void,
}

export function Dialog(props: {
    ref: React.RefObject<HTMLDialogElement | null>,
} & DialogProps) {
    if (!props.state.isOpen) {
        return undefined;
    }

    return (
        createPortal(
            <dialog
                ref={props.ref}
                onClose={props.state.onClose}
                onCancel={async (e) => {
                    e.stopPropagation();
                    e.preventDefault();

                    if (!e.bubbles) {
                        // I want to hide the dialog only when the ESC key is pressed on the dialog.
                        // When the event bubbles, for example, from a file dialog,
                        // I do not want to hide the dialog.
                        if (props.onEscape) {
                            props.onEscape();
                        }
                        else {
                            await props.state.hide();
                        }
                    }
                }}
                className={`dialog ${props.outerClassName || ""} ${props.state.animationClass || ""}`}>
                <article
                    className={`dialog__content ${props.className || ""}`}>
                    {props.children}
                </article>
            </dialog>,
            document.querySelector("body") as Element)
    );
}