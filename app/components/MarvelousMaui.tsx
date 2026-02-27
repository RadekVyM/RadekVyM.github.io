import { Section, SectionTitle, SectionLinks, SectionTechnologies, SectionImages, SectionVideo } from "./section";
import LinkChip from "./LinkChip";
import { TbBrandGithub } from "react-icons/tb";

export default function MarvelousMaui() {
    return (
        <Section className="marvelous-maui">
            <SectionImages>
                <SectionVideo
                    controls
                    loop
                    source="/images/marvelous-maui/Marvelous .NET MAUI.mp4" />
            </SectionImages>

            <SectionTitle>
                Marvelous .NET MAUI
            </SectionTitle>

            <p>
                <strong>.NET MAUI</strong> clone of the <a href="https://flutter.gskinner.com/wonderous">Wonderous app</a> — a visual showcase of eight wonders of
                the world made with Flutter by the team at <a href="https://gskinner.com">gskinner</a>. This project demonstrates how to develop tailored UI using .NET MAUI.
                It is a fully functional app that allows users to navigate the intersection of history, art, and culture by exploring the Wonders of the World.
            </p>

            <p>
                This project has been well received by the .NET MAUI community and earned <strong>500+ stars</strong> on <a href="https://github.com/RadekVyM/SimpleToolkit">GitHub</a> since
                its release.
            </p>

            <SectionLinks>
                <LinkChip
                    href="https://github.com/RadekVyM/MarvelousMAUI" >
                    <TbBrandGithub />
                    <span>GitHub</span>
                </LinkChip>
            </SectionLinks>

            <SectionTechnologies
                items={["C#", ".NET MAUI", "SimpleToolkit"]} />
        </Section>
    );
}