"use client";

import { Section, SectionTitle, SectionLinks, SectionTechnologies, SectionImages, SectionImage } from "../section";
import "./Konlatt.css";
import { TbBrandGithub, TbFileText } from "react-icons/tb";
import "./DblpAnalysisTool.css";
import { createImageItem, MediaItem } from "../../types/MediaItem";
import useMediaDialog from "../../hooks/useMediaDialog";
import MediaDialog from "../MediaDialog";

const IMAGES: Array<MediaItem> = [
    createImageItem("landing-page-image", "/images/dblp-analysis-tool/landing_page.png"),
    createImageItem("author-page-header-image", "/images/dblp-analysis-tool/author_page_header.png"),
    createImageItem("author-page-pie-image", "/images/dblp-analysis-tool/author_page_pie.png"),
    createImageItem("coauthorship-graph-image", "/images/dblp-analysis-tool/coauthorship_graph.png"),
];

const DIALOG_IMAGES: Array<MediaItem> = [
    ...IMAGES,
    createImageItem("author-page-charts-image", "/images/dblp-analysis-tool/author_page_charts.png"),
    createImageItem("search-image", "/images/dblp-analysis-tool/search.png"),
    createImageItem("stream-section-image", "/images/dblp-analysis-tool/stream_section.png"),
];

export default function DblpAnalysisTool() {
    const dialogState = useMediaDialog(DIALOG_IMAGES);

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

            <SectionLinks
                links={[
                    {
                        href: "https://github.com/RadekVyM/dblp-analysis-tool",
                        title: "GitHub",
                        icon: <TbBrandGithub />,
                    },
                    {
                        href: "https://github.com/RadekVyM/dblp-analysis-tool/blob/main/text/BP_Vym%C4%9Btal%C3%ADk.pdf",
                        title: "Thesis",
                        icon: <TbFileText />,
                    },
                ]} />

            <SectionTechnologies
                items={["React", "Next.js", "Tailwind CSS", "TypeScript", "Web Workers", "Canvas API"]} />

            <MediaDialog
                state={dialogState} />
        </Section>
    );
}