import path from "node:path";
import { fileURLToPath } from "node:url";

interface Paths {
  input: string;
  output: string;
  outputTypst: string;
  outputDir: string;
  root: string;
}


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const root = path.resolve(__dirname, "../..");
const input = path.resolve(root, "build/resume.yaml");


const outputDir = path.resolve(root, "output");
const outputTypst = path.resolve(outputDir, "resume.typ");
const output = path.resolve(outputDir, "resume.pdf");

const paths: Paths = {
  input,
  output,
  outputTypst,
  outputDir,
  root,
};

export { paths };
