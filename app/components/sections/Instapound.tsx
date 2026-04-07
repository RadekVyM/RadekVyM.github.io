"use client";

import { SectionImages, Section, SectionImage, SectionTitle, SectionLinks, SectionTechnologies } from "../section";
import "./Instapound.css";
import { TbBrandGithub } from "react-icons/tb";
import { createImageItem, MediaItem } from "../../types/MediaItem";
import useMediaDialog from "../../hooks/useMediaDialog";
import MediaDialog from "../MediaDialog";

const IMAGES: Array<MediaItem> = [
    createImageItem("home-page-image", "/images/instapound/home_page.png"),
    createImageItem("profile-page-image", "/images/instapound/profile_page.png"),
    createImageItem("chat-image", "/images/instapound/chat.png"),
    createImageItem("login-page-image", "/images/instapound/login_page.png"),
];

export default function Instapound() {
    const dialogState = useMediaDialog(IMAGES);

    return (
        <Section className="instapound">
            <SectionImages>
                {IMAGES.map((item) =>
                    <SectionImage
                        key={item.className}
                        className={item.className}
                        source={item.source}
                        darkSource={item.darkSource}
                        onClick={async () => {
                            dialogState.setCurrentItem(item.className);
                            await dialogState.show();
                        }} />)}
            </SectionImages>

            <SectionTitle>
                Instapound
            </SectionTitle>

            <p>
                Instapound is a social media web application inspired by platforms like Instagram,
                designed for sharing posts, images, and comments among users.
                This project was created as part of a university course assignment.
            </p>

            <SectionLinks
                links={[
                    {
                        href: "https://github.com/RadekVyM/instapound",
                        title: "GitHub",
                        icon: <TbBrandGithub />,
                    },
                ]} />

            <SectionTechnologies
                items={["C#", "ASP.NET Core", "JavaScript", "Tailwind CSS", "EF Core", "Razor", "SignalR"]} />

            <MediaDialog
                state={dialogState} />
        </Section>
    );
}