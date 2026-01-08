import chalk from "chalk";
import ora from "ora";
import { verifyEnv } from "../compiler/compile.js";

export async function compileCommand(compileFile: string) {
  const prep = ora(chalk.blue("Checking Typst environment…")).start();
  try {
    await verifyEnv();
    prep.succeed(chalk.green("Typst ready!"));
  } catch (error: any) {
    prep.fail(chalk.red(error.message || "Typst not found."));
    return;
  }

  const build = ora(chalk.blue("Compiling resume…")).start();
  try {
    // TODO: actual compile logic here
    // await compile(compileFile);
    build.succeed(chalk.green("Done!"));
  } catch (error: any) {
    build.fail(chalk.red(error.message || "Compilation failed."));
  }
}

