import { Document, Page, Text, View, StyleSheet, Font, TextProps, ViewProps, Link, Image } from "@react-pdf/renderer";

Font.register({
    family: "Inter",
    fonts: [
        {
            src: "./cv/fonts/Inter_24pt-Regular.ttf",
            fontWeight: 400,
        },
        { 
            src: "./cv/fonts/Inter_24pt-SemiBold.ttf",
            fontWeight: 600,
        },
        { 
            src: "./cv/fonts/Inter_28pt-Bold.ttf",
            fontWeight: 700,
        },
        {
            src: "./cv/fonts/Inter_24pt-Italic.ttf",
            fontStyle: "italic" ,
        },
    ],
});

const SMALL_FONT_SIZE = 9;
const NORMAL_FONT_SIZE = 11;
const DIM_COLOR = "#3f3f3f";

export default function CvDocument() {
    return (
        <Document>
            <Page
                size="A4"
                style={{
                    padding: 30,
                    paddingTop: 40,
                    fontFamily: "Inter",
                }}>
                <Header />
                <Section
                    title="Education">
                    <EducationItem
                        date="June 2026 (expected)"
                        degree="Master"
                        degreeDetail="Software Development, Faculty of Science, Palacký University Olomouc"
                        thesisTitle="Web tool for concept lattice visualization" />
                    <EducationItem
                        date="June 2024"
                        degree="Bachelor"
                        degreeDetail="Computer Science, Faculty of Science, Palacký University Olomouc"
                        thesisTitle="DBLP database analysis tool"
                        marginBottom={0}
                        withDistinction />
                </Section>
                <Section
                    title="Work Experience">
                    <ExprerienceItem
                        timeSpan="Internship, October 2025 – January 2026"
                        jobTitle="Software Developer Intern"
                        place="Computer Centre of Palacký University (CVT)"
                        items={[
                            "Contributed to the development and modernization of university information systems",
                            "Collaborated with a professional development team and gained experience with internal software infrastructure",
                            "Worked with ASP.NET Core, HTML, CSS, and internal libraries"
                        ]} />
                    <ExprerienceItem
                        timeSpan="Part-time, 2019 – 2025"
                        jobTitle="Technical Content Creator"
                        place="ITnetwork.cz"
                        items={[
                            "Authored 240+ technical tutorials, practical exercises and other learning materials for the largest Czech IT e-learning platform",
                            "Contributed to courses for ASP.NET Core, Entity Framework Core, .NET MAUI, JavaScript, React, and more",
                        ]}
                        marginBottom={0} />
                </Section>
                <Section
                    title="Featured Work">
                    <ProjectItem
                        type="Master's Thesis Project"
                        title="konlatt"
                        link={{ title: "radekvym.github.io/konlatt", href: "https://radekvym.github.io/konlatt" }}
                        items={[
                            "Created a web application for visualization of Formal Concept Analysis (FCA) data",
                            "Used technologies: React, TypeScript, Tailwind CSS, WASM, Web Workers, Zustand, React Three Fiber, Canvas API"
                        ]} />
                    <ProjectItem
                        type=".NET MAUI Open Source Library"
                        title="SimpleToolkit"
                        link={{ title: "github.com/RadekVyM/SimpleToolkit", href: "https://github.com/RadekVyM/SimpleToolkit" }}
                        items={[
                            "Created a library for advanced UI navigation and lightweight controls in .NET MAUI",
                            "The library has earned 500+ stars on GitHub and over 100,000 total downloads on NuGet.org"
                        ]} />
                    <ProjectItem
                        type="UI Showcase App"
                        title="Marvelous .NET MAUI"
                        link={{ title: "github.com/RadekVyM/MarvelousMAUI", href: "https://github.com/RadekVyM/MarvelousMAUI" }}
                        items={[
                            "Created a clone of the \"Wonderous\" app to demonstrate the limits of tailored UI in .NET MAUI",
                            "The project gained significant community recognition with 500+ stars on GitHub"
                        ]}
                        marginBottom={0} />
                </Section>
                <Section
                    title="Skills"
                    marginBottom={0}>
                    <View
                        style={{
                            fontSize: SMALL_FONT_SIZE,
                        }}>
                        <ListItem>
                            <BoldText>Technologies:</BoldText> C#, .NET MAUI, ASP.NET Core, EF Core, React, Next.js, TS/JS, Tailwind CSS, WASM, Git
                        </ListItem>
                        <ListItem
                            style={{ marginBottom: 0 }}>
                            <BoldText>Languages:</BoldText> Czech (native), English (technical reading and writing, intermediate speaking)
                        </ListItem>
                    </View>
                </Section>
            </Page>
        </Document>
    );
}

function Header() {
    return (
        <View
            style={{
                marginBottom: 23
            }}>
            <Text
                style={{
                    fontSize: SMALL_FONT_SIZE,
                    marginBottom: 2,
                    color: DIM_COLOR,
                }}>
                Curriculum Vitae
            </Text>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: 700,
                    marginBottom: 10,
                }}>
                RADEK VYMĚTALÍK
            </Text>
            <Text
                style={{
                    fontSize: NORMAL_FONT_SIZE,
                    marginBottom: 10,
                }}>
                Software developer with a passion for building unique GUIs, React and .NET
            </Text>

            <Contact />
        </View>
    );
}

function Contact() {
    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                gap: 16,
            }}>
            <ContactItem
                title="radekvym.github.io"
                icon="./cv/images/world.png"
                href="https://radekvym.github.io/" />
            <ContactItem
                title="github.com/RadekVyM"
                icon="./cv/images/brand-github.png"
                href="https://github.com/RadekVyM" />
            <ContactItem
                title="rvymetalik@email.cz"
                icon="./cv/images/mail.png"
                href="mailto:rvymetalik@email.cz" />
        </View>
    );
}

function ContactItem(props: {
    title: string,
    icon: string,
    href: string,
}) {
    return (
        <Link
            src={props.href}
            style={{
                display: "flex",
                flexDirection: "row",
                fontSize: SMALL_FONT_SIZE,
                alignItems: "center",
                textDecoration: "none",
                gap: 3,
            }}>
            <Image
                src={props.icon}
                style={{
                    height: 9.5,
                    width: 9.5,
                }} />
            <Text
                style={{
                    color: "black",
                    marginBottom: 1,
                }}>
                {props.title}
            </Text>
        </Link>
    );
}

function EducationItem(props: {
    marginBottom?: number,
    date: string,
    degree: string,
    withDistinction?: boolean,
    degreeDetail: string,
    thesisTitle: string,
}) {
    return (
        <SectionItem
            marginBottom={props.marginBottom}
            pretitle={props.date}
            title={<><BoldText>{props.degree}'s degree</BoldText> in {props.degreeDetail}</>}>
            {props.withDistinction &&
                <ListItem>
                    Graduated with Distinction (Red Diploma)
                </ListItem>}
            <ListItem
                style={{
                    marginBottom: 0,
                }}>
                {props.degree} thesis: <ItalicText>{props.thesisTitle}</ItalicText>
            </ListItem>
        </SectionItem>
    );
}

function ExprerienceItem(props: {
    marginBottom?: number,
    timeSpan: React.ReactNode,
    jobTitle: React.ReactNode,
    place: React.ReactNode,
    items?: Array<React.ReactNode>,
}) {
    return (
        <SectionItem
            marginBottom={props.marginBottom}
            pretitle={props.timeSpan}
            title={<><BoldText>{props.jobTitle}</BoldText> at {props.place}</>}>
            {(props.items || []).map((item, index) =>
                <ListItem
                    key={index}
                    style={{
                        marginBottom: index === (props.items?.length || 0) - 1 ? 0 : undefined,
                    }}>
                    {item}
                </ListItem>)}
        </SectionItem>
    );
}

function ProjectItem(props: {
    marginBottom?: number,
    type: React.ReactNode,
    title: React.ReactNode,
    link: { title: string, href: string, },
    items?: Array<React.ReactNode>,
}) {
    return (
        <SectionItem
            marginBottom={props.marginBottom}
            pretitle={props.type}
            title={<><BoldText>{props.title}</BoldText> <Text style={{ fontSize: SMALL_FONT_SIZE }}>[<Link src={props.link.href} style={{ textDecoration: "none", color: DIM_COLOR, }}>{props.link.title}</Link>]</Text></>}>
            {(props.items || []).map((item, index) =>
                <ListItem
                    key={index}
                    style={{
                        marginBottom: index === (props.items?.length || 0) - 1 ? 0 : undefined,
                    }}>
                    {item}
                </ListItem>)}
        </SectionItem>
    );
}

function Section(props: {
    title: React.ReactNode,
    children?: React.ReactNode,
    marginBottom?: number,
}) {
    return (
        <View
            style={{
                marginBottom: props.marginBottom ?? 18,
            }}>
            <BoldText
                style={{
                    fontSize: 15,
                    marginBottom: 12,
                }}>
                {props.title}
            </BoldText>
            {props.children}
        </View>
    );
}

function SectionItem(props: {
    marginBottom?: number,
    pretitle?: React.ReactNode,
    title: React.ReactNode,
    children?: React.ReactNode,
}) {
    return (
        <View
            style={{
                marginBottom: props.marginBottom ?? 14,
            }}>
            {props.pretitle &&
                <Text
                    style={{
                        fontSize: SMALL_FONT_SIZE,
                        marginBottom: 3,
                        color: DIM_COLOR,
                    }}>
                    {props.pretitle}
                </Text>}
            <View>
                <Text
                    style={{
                        fontSize: NORMAL_FONT_SIZE,
                        marginBottom: 5,
                    }}>
                    {props.title}
                </Text>
                {props.children &&
                    <View
                        style={{
                            fontSize: SMALL_FONT_SIZE,
                        }}>
                        {props.children}
                    </View>}
            </View>
        </View>
    );
}

function ListItem(props: {
    children?: React.ReactNode,
} & ViewProps) {
    const { children, ...rest } = props;

    return (
        <View
            {...rest}
            style={{
                flexDirection: "row",
                ...rest.style,
                marginBottom: (rest.style as any)?.marginBottom ?? 3,
            }}>
            <Text
                style={{
                    marginRight: 4,
                    color: DIM_COLOR,
                }}>
                •
            </Text>
            <Text>
                {children}
            </Text>
        </View>
    );
}

function BoldText(props: {
    children?: React.ReactNode,
} & TextProps) {
    return (
        <Text
            {...props}
            style={{
                ...props.style,
                fontWeight: 600,
            }} />
    );
}

function ItalicText(props: {
    children?: React.ReactNode,
} & TextProps) {
    return (
        <Text
            {...props}
            style={{
                ...props.style,
                fontStyle: "italic",
            }} />
    );
}