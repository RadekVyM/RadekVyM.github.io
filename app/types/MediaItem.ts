export type MediaItem = {
    type: "image" | "video",
    className: string,
    source: string,
    darkSource?: string,
    alt?: string,
}

export function createImageItem(
    className: string,
    source: string,
    darkSource?: string,
    alt?: string,
) {
    return createMediaItem("image", className, source, darkSource, alt);
}

export function createVideoItem(
    className: string,
    source: string,
) {
    return createMediaItem("video", className, source);
}

export function createMediaItem(
    type: "image" | "video",
    className: string,
    source: string,
    darkSource?: string,
    alt?: string,
) {
    return {
        type,
        className,
        source,
        darkSource,
        alt,
    };
}