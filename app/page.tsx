import "./page.css";
import Konlatt from "./components/Konlatt";
import Header from "./components/Header";
import SimpleToolkit from "./components/SimpleToolkit";
import DblpAnalysisTool from "./components/DblpAnalysisTool";
import MarvelousMaui from "./components/MarvelousMaui";
import ItNetwork from "./components/ItNetwork";

export default function Home() {
    return (
        <main
            className="main">
            <Header />

            <Konlatt />

            <DblpAnalysisTool />

            <ItNetwork />

            <SimpleToolkit />

            <MarvelousMaui />
        </main>
    );
}