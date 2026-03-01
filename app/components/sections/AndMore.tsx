import { Section, SectionTitle } from "../section";
import "./AndMore.css";

export default function AndMore() {
    return (
        <Section className="and-more">
            <SectionTitle>
                And more...
            </SectionTitle>

            <p>
                For a deeper look into my experiments and side projects, explore my <a href="https://github.com/RadekVyM">GitHub</a>.
            </p>
        </Section>
    );
}