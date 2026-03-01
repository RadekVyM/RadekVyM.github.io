"use client";

import { SectionImages, Section, SectionImage, SectionTitle, SectionLinks, SectionTechnologies } from "../section";
import "./MauiChallenges.css";
import { TbBrandGithub } from "react-icons/tb";
import { createImageItem, createVideoItem, MediaItem } from "../../types/MediaItem";
import useMediaDialog from "../../hooks/useMediaDialog";
import MediaDialog from "../MediaDialog";

const IMAGES: Array<MediaItem> = [
    createImageItem("gadgets-store-app", "/images/challenges/gadgets-store-app.png"),
    createImageItem("callingapp", "/images/challenges/callingapp.png"),
    createImageItem("navbaranimation1", "/images/challenges/navbaranimation1.png"),
];

const VIDEOS: Array<MediaItem> = [
    createVideoItem(
        "gadgets-store-app",
        "/images/challenges/GadgetsStoreApp.mp4",
        { text: "Gadgets Store App", href: "https://github.com/RadekVyM/Gadgets-Store-App" }),
    createVideoItem(
        "callingapp",
        "/images/challenges/CallingApp.mp4",
        { text: "Calling App", href: "https://github.com/RadekVyM/Calling-App" }),
    createVideoItem(
        "navbaranimation1",
        "/images/challenges/NavbarAnimation1.mp4",
        { text: "Navbar Animation #1", href: "https://github.com/RadekVyM/Navbar-Animation-1" }),
    createVideoItem(
        "navbaranimation2",
        "/images/challenges/NavbarAnimation2.mp4",
        { text: "Navbar Animation #2", href: "https://github.com/RadekVyM/Navbar-Animation-2" }),
    createVideoItem(
        "tab-bar-switches",
        "/images/challenges/TabBarSwitches.mp4",
        { text: "Tab Bar Switches Interaction", href: "https://github.com/RadekVyM/Tab-Bar-Switches-Interaction" }),
    createVideoItem(
        "hamburger-menu-app",
        "/images/challenges/HamburgerMenuApp.mp4",
        { text: "Hamburger Menu App", href: "https://github.com/RadekVyM/HamburgerMenuApp" }),
    createVideoItem(
        "betapp",
        "/images/challenges/betapp.mp4",
        { text: "Bet App", href: "https://github.com/RadekVyM/Bet-App" }),
    createVideoItem(
        "wasteapp",
        "/images/challenges/wasteapp.mp4",
        { text: "Waste App", href: "https://github.com/RadekVyM/Waste-App" }),
];

export default function MauiChallenges() {
    const dialogState = useMediaDialog(VIDEOS);

    return (
        <Section className="maui-challenges">
            <SectionImages>
                {IMAGES.map((item) =>
                    <SectionImage
                        key={item.className}
                        className={item.className}
                        source={item.source}
                        darkSource={item.darkSource}
                        height={450}
                        onClick={async () => {
                            dialogState.setCurrentItem(item.className);
                            await dialogState.show();
                        }} />)}
            </SectionImages>

            <SectionTitle>
                .NET MAUI UI challenges
            </SectionTitle>

            <p>
                I built a series of <dfn title="practice projects where a developer takes a pre-existing design and tries to recreate it using code">UI challenges</dfn> in
                .NET MAUI based on designs from <a href="https://dribbble.com">Dribbble</a>.
                These projects serve as <strong>visual proof-of-concepts</strong> to demonstrate that the framework can successfully handle unique and complex app UIs.
            </p>

            <SectionLinks
                links={[
                    {
                        href: "https://github.com/RadekVyM?tab=repositories&q=&type=public&language=c%23",
                        title: "GitHub",
                        icon: <TbBrandGithub />,
                    },
                ]} />

            <SectionTechnologies
                items={["C#", ".NET MAUI", "SimpleToolkit"]} />

            <MediaDialog
                state={dialogState} />
        </Section>
    );
}