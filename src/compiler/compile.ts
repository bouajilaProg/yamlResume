import { execa } from "execa";

export async function verifyEnv() {
  try {
    await execa("typst", ["--version"], { stdout: "ignore" });
  } catch (err) {
    throw new Error(
      "Typst not found. Install it from https://typst.app/docs/install/"
    );
  }
}

