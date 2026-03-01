import { Section, SectionTitle, SectionLinks, SectionTechnologies } from "../section";
import { TbBrandGithub, TbPackage } from "react-icons/tb";

export default function SimpleToolkit() {
    return (
        <Section className="simple-toolkit">
            <SectionTitle>
                SimpleToolkit
            </SectionTitle>

            <p>
                SimpleToolkit is a library of helpers and lightweight, easily
                customizable <a href="https://dotnet.microsoft.com/en-us/apps/maui">.NET MAUI</a> controls
                designed to give developers full control over their app's UI and navigation.
                The library has earned <strong>500+ stars</strong> on <a href="https://github.com/RadekVyM/SimpleToolkit">GitHub</a> and
                over <strong>100,000 total downloads</strong> on <a href="https://www.nuget.org/profiles/RadekVyM">NuGet.org</a>.
            </p>

            <SectionLinks
                links={[
                    {
                        href: "https://github.com/RadekVyM/SimpleToolkit",
                        title: "GitHub",
                        icon: <TbBrandGithub />,
                    },
                    {
                        href: "https://www.nuget.org/profiles/RadekVyM",
                        title: "NuGet",
                        icon: <TbPackage />,
                    },
                ]} />

            <SectionTechnologies
                items={["C#", ".NET MAUI"]} />
        </Section>
    );
}