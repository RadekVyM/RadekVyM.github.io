import "./page.css";
import Konlatt from "./components/sections/Konlatt";
import Header from "./components/Header";
import SimpleToolkit from "./components/sections/SimpleToolkit";
import DblpAnalysisTool from "./components/sections/DblpAnalysisTool";
import MarvelousMaui from "./components/sections/MarvelousMaui";
import ItNetwork from "./components/sections/ItNetwork";
import Footer from "./components/Footer";
import MauiChallenges from "./components/sections/MauiChallenges";
import AndMore from "./components/sections/AndMore";
import Tomeflow from "./components/sections/Tomeflow";
import Instapound from "./components/sections/Instapound";

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

            <MauiChallenges />

            <Tomeflow />

            <Instapound />

            <AndMore />

            <Footer />
        </main>
    );
}