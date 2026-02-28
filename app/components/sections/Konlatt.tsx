"use client";

import { SectionImages, Section, SectionImage, SectionTitle, SectionLinks, SectionTechnologies } from "../section";
import "./Konlatt.css";
import LinkChip from "../LinkChip";
import { TbBrandGithub, TbWorld } from "react-icons/tb";
import { createImageItem, MediaItem } from "../../types/MediaItem";
import useMediaDialog from "../../hooks/useMediaDialog";
import MediaDialog from "../MediaDialog";

const IMAGES: Array<MediaItem> = [
    createImageItem("diagram-image", "/images/konlatt/diagram_light.png", "/images/konlatt/diagram_dark.png"),
    createImageItem("diagram-export-image", "/images/konlatt/diagram_export_light.png", "/images/konlatt/diagram_export_dark.png"),
    createImageItem("context-image", "/images/konlatt/context_light.png", "/images/konlatt/context_dark.png"),
    createImageItem("explorer-image", "/images/konlatt/explorer_light.png", "/images/konlatt/explorer_dark.png"),
];

export default function Konlatt() {
    const dialogState = useMediaDialog(IMAGES);

    return (
        <Section className="konlatt">
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
                konlatt
            </SectionTitle>

            <p>
                Web application that bridges the gap between complex <a href="https://en.wikipedia.org/wiki/Formal_concept_analysis">Formal Concept Analysis</a> (FCA)
                and user-friendly interaction, making conceptual data exploration <strong>accessible to anyone</strong>. This application is being developed as part of
                my master's thesis at <a href="https://www.inf.upol.cz/">Palacký University Olomouc</a>.
            </p>

            <SectionLinks>
                <LinkChip
                    href="https://radekvym.github.io/konlatt">
                    <TbWorld />
                    <span>App</span>
                </LinkChip>
                <LinkChip
                    href="https://github.com/RadekVyM/konlatt">
                    <TbBrandGithub />
                    <span>GitHub</span>
                </LinkChip>
            </SectionLinks>

            <SectionTechnologies
                items={["React", "Zustand", "Tailwind CSS", "TypeScript", "WASM", "Web Workers", "React Three Fiber"]} />

            <MediaDialog
                state={dialogState} />
        </Section>
    );
}