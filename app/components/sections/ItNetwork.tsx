import { Section, SectionTitle, SectionLinks, SectionTechnologies } from "../section";
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

            <SectionLinks
                links={[
                    {
                        href: "https://www.itnetwork.cz/portfolio/63461",
                        title: "ITnetwork",
                        icon: <Logo className="chip-itnetwork-icon" />,
                    },
                ]} />

            <SectionTechnologies
                items={["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "WPF", "WinUI 3", ".NET MAUI", "JavaScript", "React"]} />
        </Section>
    );
}

function Logo(props: {
    className?: string,
}) {
    return (
        <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            viewBox="0 0 110.393 117.787"
            className={props.className}>
            <path
                style={{
                    paintOrder: "stroke fill markers",
                }}
                d="M131.818 67.735a35 35 0 0 1 8.08 6.03c6.34 6.342 10.253 15.112 10.253 24.83v31.23c0 19.434-15.647 35.08-35.082 35.08H83.84c-19.435 0-35.081-15.646-35.081-35.08v-31.23c0-9.718 3.911-18.488 10.252-24.83a35 35 0 0 1 8.08-6.03"
                transform="translate(-44.258 -51.62)" />
            <path
                style={{
                    paintOrder: "stroke fill markers",
                }}
                d="m83.09 129.631 16.256 20.652 16.196-20.471-9.957-39.832c-4.174-1.852-8.287-1.76-12.347.021zm.186-68.749c10.268-6.355 21.147-6.685 32.229 0l-8.473 12.006c-5.581-2.216-10.411-2.065-15.369.127z"
                transform="translate(-44.258 -51.62)" />
        </svg>
    );
}