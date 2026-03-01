import { renderToFile } from "@react-pdf/renderer";
import CvDocument from "./CvDocument";

generate();

async function generate() {
    await renderToFile(<CvDocument />, "./public/cv.pdf");
    console.log("PDF Generated!");
}