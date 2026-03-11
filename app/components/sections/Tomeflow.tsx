"use client";

import { SectionImages, Section, SectionImage, SectionTitle, SectionLinks, SectionTechnologies } from "../section";
import "./Tomeflow.css";
import { TbBrandGithub } from "react-icons/tb";
import { createImageItem, MediaItem } from "../../types/MediaItem";
import useMediaDialog from "../../hooks/useMediaDialog";
import MediaDialog from "../MediaDialog";

const IMAGES: Array<MediaItem> = [
    createImageItem("home-image", "/images/tomeflow/home_light.png", "/images/tomeflow/home_dark.png"),
    createImageItem("board-image", "/images/tomeflow/board_light.png", "/images/tomeflow/board_dark.png"),
    createImageItem("markdown-editor-image", "/images/tomeflow/markdown_editor_light.png", "/images/tomeflow/markdown_editor_dark.png"),
    createImageItem("board-item-image", "/images/tomeflow/board_item_light.png", "/images/tomeflow/board_item_dark.png"),
];

const DIALOG_IMAGES: Array<MediaItem> = [
    ...IMAGES,
    createImageItem("project-image", "/images/tomeflow/project_light.png", "/images/tomeflow/project_dark.png"),
];

export default function Tomeflow() {
    const dialogState = useMediaDialog(DIALOG_IMAGES);

    return (
        <Section className="tomeflow">
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
                Tomeflow
            </SectionTitle>

            <p>
                An all-in-one personal app for note-taking, project management, and task organization,
                designed to help users streamline their workflow and boost productivity.
            </p>

            <SectionLinks
                links={[
                    {
                        href: "https://github.com/RadekVyM/tomeflow-next",
                        title: "GitHub",
                        icon: <TbBrandGithub />,
                    },
                ]} />

            <SectionTechnologies
                items={["React", "Next.js", "Tailwind CSS", "TypeScript", "Turso", "Drizzle ORM", "TanStack Query"]} />

            <MediaDialog
                state={dialogState} />
        </Section>
    );
}