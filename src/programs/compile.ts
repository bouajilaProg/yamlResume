import { execa } from "execa";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import chalk from "chalk";
import ora from "ora";

// --- ESM workaround ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const root = path.resolve(__dirname, "../..");
const input = path.resolve(root, "build/resume.typ");
const output = path.resolve(process.cwd(), "resume.pdf");

export async function compileCommand() {
  console.log(chalk.bold.cyan("\nTypst Resume Compiler\n"));

  // Input check
  if (!fs.existsSync(input)) {
    console.error(
      chalk.red("✖ Missing file:") +
      " " +
      chalk.gray("build/resume.typ")
    );
    process.exit(1);
  }

  // Typst availability check
  const checkSpinner = ora("Checking Typst installation...").start();
  try {

    const { stdout: version } = await execa("typst", ["--version"]);
    const { stdout: whichTypst } = await execa("which", ["typst"]);
    checkSpinner.succeed(`Typst found: ${version.trim()} at ${whichTypst.trim()}`);


  } catch {
    checkSpinner.fail("Typst not found");
    console.error(
      "\n" +
      chalk.red("✖ Typst is not installed or not in PATH.\n") +
      chalk.yellow("→ Install it from: ") +
      chalk.underline("https://typst.app")
    );
    return
  }

  // Compile
  const compileSpinner = ora("Compiling resume...").start();
  try {
    await execa(
      "typst",
      ["compile", "--root", root, input, "-f", "pdf", output],
      { cwd: root }
    );

    compileSpinner.succeed("Compilation successful");
    console.log(
      chalk.green("✔ PDF generated: ") +
      chalk.bold(output)
    );
  } catch (error: any) {
    compileSpinner.fail("Compilation failed");

    if (error?.stderr) {
      console.error("\n" + chalk.red(error.stderr));
    } else if (error?.message) {
      console.error("\n" + chalk.red(error.message));
    }

    process.exit(1);
  }
}

