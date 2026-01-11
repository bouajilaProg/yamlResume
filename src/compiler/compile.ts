import { execa } from "execa";
import { paths } from "../utils/path";

export async function verifyEnv() {
  try {
    await execa("typst", ["--version"], { stdout: "ignore" });
  } catch (err) {
    throw new Error(
      "Typst not found. Install it from https://typst.app/docs/install/"
    );
  }
}


export async function compileToPdf(inputFile: string, outputFile: string) {
  try {
    await execa("typst", [
      "compile",
      "--root", paths.root,
      inputFile,
      outputFile,
    ]);
  } catch (err) {
    throw new Error("Compilation failed. " + (err as Error).message);
  }
}

