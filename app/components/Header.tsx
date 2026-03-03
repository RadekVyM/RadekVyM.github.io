import { TbBrandGithub, TbBrandLinkedin, TbFileText } from "react-icons/tb";
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
                    <span className="things-i-done">
                        some things I've done
                    </span>
                </p>

                <div
                    className="header-links">
                    <LinkChip
                        href="https://github.com/RadekVyM">
                        <TbBrandGithub />
                        <span>GitHub</span>
                    </LinkChip>
                    <LinkChip
                        href="https://www.linkedin.com/in/radek-vymetalik">
                        <TbBrandLinkedin />
                        <span>LinkedIn</span>
                    </LinkChip>
                    <LinkChip
                        href="./cv.pdf"
                        target="_blank">
                        <TbFileText />
                        <span className="full-cv">Curriculum Vitae</span>
                        <span className="short-cv">CV</span>
                    </LinkChip>
                </div>
            </div>
        </header>
    );
}