export default function ImagePreview(props: {
    source: string,
    darkSource?: string,
    alt?: string,
    className?: string,
}) {
    return (
        <picture>
            {props.darkSource &&
                <source
                    srcSet={props.darkSource}
                    media="(prefers-color-scheme: dark)" />}
            <img
                src={props.source}
                alt={props.alt}
                className={props.className} />
        </picture>
    );
}