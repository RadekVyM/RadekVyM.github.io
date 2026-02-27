"use client";

import { Section, SectionTitle, SectionLinks, SectionTechnologies, SectionImages, SectionImage } from "./section";
import "./Konlatt.css";
import LinkChip from "./LinkChip";
import { TbBrandGithub, TbFileText } from "react-icons/tb";
import "./DblpAnalysisTool.css";
import { createImageItem, MediaItem } from "../types/MediaItem";
import useMediaDialogState from "../hooks/useMediaDialogState";
import MediaDialog from "./MediaDialog";

const IMAGES: Array<MediaItem> = [
    createImageItem("landing-page-image", "/images/dblp-analysis-tool/landing_page.png"),
    createImageItem("author-page-header-image", "/images/dblp-analysis-tool/author_page_header.png"),
    createImageItem("author-page-pie-image", "/images/dblp-analysis-tool/author_page_pie.png"),
    createImageItem("coauthorship-graph-image", "/images/dblp-analysis-tool/coauthorship_graph.png"),
];

export default function DblpAnalysisTool() {
    const dialogState = useMediaDialogState(IMAGES);

    return (
        <Section className="dblp-analysis-tool">
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
                dblp-analysis-tool
            </SectionTitle>

            <p>
                Web application for analyzing the <a href="https://dblp.org/">dblp computer science bibliography</a>,
                built as part of my bachelor's thesis at <a href="https://www.inf.upol.cz/">Palacký University Olomouc</a>.
                The project enables researchers and institutions to <strong>visualize, explore, and analyze</strong> bibliographic metadata
                from dblp with a user-friendly interface.
            </p>

            <SectionLinks>
                <LinkChip
                    href="https://github.com/RadekVyM/dblp-analysis-tool" >
                    <TbBrandGithub />
                    <span>GitHub</span>
                </LinkChip>
                <LinkChip
                    href="https://github.com/RadekVyM/dblp-analysis-tool/blob/main/text/BP_Vym%C4%9Btal%C3%ADk.pdf" >
                    <TbFileText />
                    <span>Text</span>
                </LinkChip>
            </SectionLinks>

            <SectionTechnologies
                items={["React", "Next.js", "Tailwind CSS", "TypeScript", "Web Workers", "Canvas API"]} />

            <MediaDialog
                state={dialogState} />
        </Section>
    );
}