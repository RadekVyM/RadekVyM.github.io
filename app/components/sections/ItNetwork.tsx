import { Section, SectionTitle, SectionLinks, SectionTechnologies } from "../section";
import LinkChip from "../LinkChip";
import "./ItNetwork.css";

export default function ItNetwork() {
    return (
        <Section className="itnetwork">
            <small className="itnetwork-subtitle">Part-time, 2019-2025</small>
            <SectionTitle>
                Technical content creation for ITnetwork.cz
            </SectionTitle>

            <p>
                From 2019 to 2025, I worked part-time for <a href="https://www.itnetwork.cz/">ITnetwork.cz</a> as a technical content creator.
                I focused mainly on <strong>.NET</strong>, with a strong emphasis on <strong>ASP.NET Core</strong>. My work involved writing Czech tutorials,
                creating practical exercises, and keeping courses up to date.
                I also covered desktop and mobile frameworks (WPF, WinUI, .NET MAUI) and contributed to the <strong>JavaScript</strong> and <strong>React</strong> courses.
            </p>

            <SectionLinks>
                <LinkChip
                    href="https://www.itnetwork.cz/portfolio/63461" >
                    <img
                        className="chip-itnetwork-icon"
                        src="/images/itnetwork/itnetwork-logo.png" />
                    <span>ITnetwork Profile</span>
                </LinkChip>
            </SectionLinks>

            <SectionTechnologies
                items={["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "WPF", "WinUI 3", ".NET MAUI", "JavaScript", "React"]} />
        </Section>
    );
}