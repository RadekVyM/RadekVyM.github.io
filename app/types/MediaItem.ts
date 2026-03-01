export type MediaItem = {
    type: "image" | "video",
    className: string,
    source: string,
    darkSource?: string,
    alt?: string,
    title?: MediaTitle,
}

type MediaTitle = {
    text: string,
    href?: string,
}

export function createImageItem(
    className: string,
    source: string,
    darkSource?: string,
    alt?: string,
    title?: MediaTitle,
) {
    return createMediaItem("image", className, source, darkSource, alt, title);
}

export function createVideoItem(
    className: string,
    source: string,
    title?: MediaTitle,
) {
    return createMediaItem("video", className, source, undefined, undefined, title);
}

export function createMediaItem(
    type: "image" | "video",
    className: string,
    source: string,
    darkSource?: string,
    alt?: string,
    title?: MediaTitle,
) {
    return {
        type,
        className,
        source,
        darkSource,
        alt,
        title,
    };
}