#!/usr/bin/env node

import { Command } from "commander";
import { compileCommand } from "../src/programs/compileCommand.js";

const program = new Command();

program
  .name("resume")
  .description("Resume compiler powered by Typst")
  .version("0.1.0");

program
  .command("compile [inputFile]")
  .description("Compile a Typst file to PDF")
  .action((inputFile) => {
    compileCommand(inputFile);
  });

program.parse();

