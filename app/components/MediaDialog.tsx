"use client";

import { TbChevronLeft, TbChevronRight, TbExternalLink, TbMinus, TbPlus, TbX } from "react-icons/tb";
import { MediaDialogState } from "../types/MediaDialogState";
import { Dialog } from "./Dialog";
import ImagePreview from "./ImagePreview";
import "./MediaDialog.css";
import PanZoomContainer, { PanZoomContext, PanZoomContextProvider } from "./PanZoomContainer";
import { MediaItem } from "../types/MediaItem";
import { useContext, useRef, useState } from "react";

const ANIMATION_SEGMENT_LENGTH = 160;

export default function MediaDialog(props: {
    state: MediaDialogState,
}) {
    const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [animationClassName, setAnimationClassName] = useState("");

    async function moveCurrentItem(offset: number) {
        const currentIndex = props.state.items.findIndex((item) =>
            props.state.currentItem.className === item.className);
        let newIndex = (currentIndex + offset) % props.state.items.length;

        if (newIndex < 0) {
            newIndex = props.state.items.length + newIndex;
        }

        const nextItem = props.state.items[newIndex];
        const rightDirection = offset > 0;

        if (animationTimeoutRef.current !== null) {
            clearTimeout(animationTimeoutRef.current);
        }

        setAnimationClassName(rightDirection ? "slide-left-out" : "slide-right-out");
        animationTimeoutRef.current = setTimeout(() => {
            props.state.setCurrentItem(nextItem.className);
            setAnimationClassName(rightDirection ? "slide-left-in" : "slide-right-in");

            if (animationTimeoutRef.current !== null) {
                clearTimeout(animationTimeoutRef.current);
            }

            animationTimeoutRef.current = setTimeout(() => {
                setAnimationClassName("");
                animationTimeoutRef.current = null;
            }, ANIMATION_SEGMENT_LENGTH);
        }, ANIMATION_SEGMENT_LENGTH);
    }

    return (
        <Dialog
            ref={props.state.dialogRef}
            state={props.state}
            className="media-dialog">
            <Button
                className="media-dialog-close"
                title="Close"
                onClick={props.state.hide}>
                <TbX />
            </Button>

            {props.state.currentItem.type === "image" ?
                <Image
                    key={props.state.currentItem.className}
                    className={animationClassName}
                    item={props.state.currentItem} /> :
                <div
                    className="video-preview-container">
                    <video
                        className={`video-preview ${animationClassName || ""}`}
                        key={props.state.currentItem.className}
                        autoPlay
                        controls
                        loop
                        src={props.state.currentItem.source} />
                </div>}

            {props.state.items.length > 1 &&
                <>
                    <Button
                        className="media-previous"
                        title="Previous"
                        onClick={() => moveCurrentItem(-1)}>
                        <TbChevronLeft />
                    </Button>
                    <Button
                        className="media-next"
                        title="Next"
                        onClick={() => moveCurrentItem(1)}>
                        <TbChevronRight />
                    </Button>
                </>}

            {props.state.currentItem.title &&
                <div
                    className="media-title">
                    {props.state.currentItem.title.href ?
                        <a
                            href={props.state.currentItem.title.href}
                            target="_blank">
                            {props.state.currentItem.title.text} <TbExternalLink />
                        </a> :
                        <span>{props.state.currentItem.title.text}</span>}
                </div>}
        </Dialog>
    );
}

function Image(props: {
    className?: string,
    item: MediaItem,
}) {
    return (
        <PanZoomContextProvider>
            <PanZoomContainer
                className={`image-preview-container ${props.className || ""}`}>
                <ImagePreview
                    className="image-preview"
                    source={props.item.source}
                    darkSource={props.item.darkSource}
                    alt={props.item.alt} />
            </PanZoomContainer>
            <ZoomBar />
        </PanZoomContextProvider>
    );
}

function ZoomBar() {
    const { actions, scale } = useContext(PanZoomContext);

    return (
        <div
            className="image-preview-zoom-bar">
            <Button
                title="Zoom out"
                onClick={() => actions.current?.zoomOut()}>
                <TbMinus />
            </Button>

            <div
                className="image-preview-zoom-bar__value">
                {Math.round(100 * scale)}%
            </div>

            <Button
                title="Zoom in"
                onClick={() => actions.current?.zoomIn()}>
                <TbPlus />
            </Button>
        </div>
    );
}

function Button(props: {
    className?: string,
    title: string,
    children: React.ReactNode,
    onClick: () => void,
}) {
    return (
        <button
            className={`media-button ${props.className || ""}`}
            title={props.title}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
}