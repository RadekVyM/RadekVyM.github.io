import Link from "next/link";
import "./LinkChip.css";

export default function LinkChip(props: {
    href: string,
    children?: React.ReactNode,
    className?: string,
}) {
    return (
        <Link
            className={`link-chip ${props.className || ""}`}
            href={props.href}>
            {props.children}
        </Link>
    );
}