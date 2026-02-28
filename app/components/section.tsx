import { TbPlayerPlayFilled } from "react-icons/tb";
import ImagePreview from "./ImagePreview";
import "./section.css";

export function Section(props: {
    children?: React.ReactNode,
    className?: string,
}) {
    return (
        <section className={`section ${props.className || ""}`}>
            <div className="section__content">
                {props.children}
            </div>
        </section>
    );
}

export function SectionTitle(props: {
    className?: string,
    children?: React.ReactNode,
}) {
    return (
        <h2
            className={`section-title ${props.className || ""}`}>
            {props.children}
        </h2>
    );
}

export function SectionImages(props: {
    className?: string,
    children?: React.ReactNode,
}) {
    return (
        <div
            className={`section-images ${props.className || ""}`}>
            {props.children}
        </div>
    );
}

export function SectionImage(props: {
    source: string,
    darkSource?: string,
    alt?: string,
    className?: string,
    height?: number,
    onClick?: () => void,
}) {
    if (props.onClick) {
        return (
            <button
                className={`section-image ${props.className || ""}`}
                onClick={props.onClick}>
                <ImagePreview
                    {...props}
                    className="section-image__content" />
            </button>
        );
    }

    return (
        <ImagePreview
            {...props}
            className={`section-image ${props.className || ""}`} />
    );
}

export function SectionVideo(props: {
    source: string,
    className?: string,
    onClick?: () => void,
} & React.HTMLProps<HTMLVideoElement>) {
    if (props.onClick) {
        return (
            <button
                className={`section-video ${props.className || ""}`}
                onClick={props.onClick}>
                <video
                    src={props.source}
                    controls={false}
                    className="section-video__content" />
                <TbPlayerPlayFilled
                    className="section-video__play" />
            </button>
        );
    }

    return (
        <video
            {...props}
            src={props.source}
            className={`section-video ${props.className || ""}`} />
    );
}

export function SectionLinks(props: {
    children?: React.ReactNode,
}) {
    return (
        <div
            className="section-links">
            {props.children}
        </div>
    );
}

export function SectionTechnologies(props: {
    items: Array<string>,
}) {
    return (
        <div
            className="section-technologies">
            {props.items.map((item, index) =>
                <span
                    key={index}
                    className="section-technologies__item">
                    {item}
                </span>)}
        </div>
    );
}