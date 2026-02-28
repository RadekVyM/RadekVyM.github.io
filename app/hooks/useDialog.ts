"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { DialogState } from "../types/DialogState";

const ANIMATION_LENGTH = 200;

export default function useDialog(
    openAnimation?: string,
    hideAnimation?: string
): DialogState {
    const [animationClass, setAnimationClass] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (isOpen) {
            dialogRef.current?.showModal();
        }
        else {
            dialogRef.current?.close();
        }
    }, [isOpen]);

    const show = useCallback((): Promise<void> => {
        setAnimationClass(openAnimation || "animate-dialog-in");
        setIsOpen(true);
        return new Promise((resolve) => {
            const timeout = setTimeout(() => {
                clearTimeout(timeout);
                resolve(undefined);
                setAnimationClass("");
            }, ANIMATION_LENGTH);
        });
    }, []);

    const hide = useCallback((): Promise<void> => {
        setAnimationClass(hideAnimation || "animate-dialog-out");
        return new Promise((resolve) => {
            const timeout = setTimeout(() => {
                setIsOpen(false);
                clearTimeout(timeout);
                resolve(undefined);
                setAnimationClass("");
            }, ANIMATION_LENGTH);
        });
    }, []);

    return {
        dialogRef,
        animationClass,
        isOpen,
        show,
        hide,
    };
}