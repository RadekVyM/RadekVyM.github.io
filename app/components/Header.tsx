import { TbBrandGithub } from "react-icons/tb";
import "./Header.css";
import LinkChip from "./LinkChip";

export default function Header() {
    return (
        <header className="section header">
            <div className="section__content header__content">
                <h1 className="sr-only">
                    My portfolio page 
                </h1>

                <p>
                    <span className="hello">
                        Hi, I'm Radek Vymětalík. I enjoy building unique GUIs, and these are
                    </span>
                    <span className="this-i-done">
                        some things I've done
                    </span>
                </p>

                <LinkChip
                    href="https://github.com/RadekVyM">
                    <TbBrandGithub />
                    <span>GitHub</span>
                </LinkChip>
            </div>
        </header>
    );
}