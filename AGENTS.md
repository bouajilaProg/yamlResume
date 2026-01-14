# Agent Instructions for yamlResume

This document provides guidelines for AI agents and developers working on the `yamlResume` project. Adhere to these instructions to maintain code quality, consistency, and functionality.

## 1. Project Overview

`yamlResume` is a tool to generate resumes (specifically using Typst) from YAML data. It utilizes TypeScript, executes shell commands via `execa`, and relies on the `typst` CLI for the final PDF generation.

**Tech Stack:**
- **Runtime:** Node.js (Module type)
- **Language:** TypeScript (Strict, NodeNext)
- **Package Manager:** pnpm
- **External Dependency:** `typst` CLI must be installed and available in the PATH.

## 2. Operational Commands

Use `pnpm` for all script executions.

### Build & Typecheck
- **Build (Transpile):**
  ```bash
  pnpm run build
  ```
  Produces JavaScript in `dist/`.

- **Typecheck (No Emit):**
  ```bash
  pnpm run typecheck
  ```
  Run this frequently to ensure type safety without generating output files.

### Development & Execution
- **Run CLI (Dev):**
  ```bash
  pnpm run dev
  ```
  Executes `bin/resume-maker.ts` using `tsx`.

- **Start (Prod):**
  ```bash
  pnpm run start
  ```
  Runs the built `dist/index.js`.

### Testing
This project currently relies on manual execution tests that generate output files (PDFs/Typst source) for visual verification. There is no standard unit test framework (like Jest) currently configured for automated assertions.

- **Run Compile Test (Single Run):**
  ```bash
  pnpm run test-compile
  ```
  Executes `src/compiler/test/compileTestBlock.test.ts`. This script compiles a mock resume and outputs it to `output/resume.pdf`.

- **Run E2E Watch Mode:**
  ```bash
  pnpm run e2etest-compile
  ```
  Uses `nodemon` to watch for changes in `src` and re-runs the compile test. It attempts to open the generated PDF in `okular` (Linux PDF viewer).

- **Run Any Single Script:**
  ```bash
  pnpm tsx <relative/path/to/script.ts>
  ```
  Use this to execute any specific TypeScript file directly.

## 3. Code Style & Conventions

### Formatting
- **Indentation:** 2 spaces.
- **Quotes:** Double quotes `"` for strings and imports.
- **Semicolons:** Always use semicolons at the end of statements.
- **Line Length:** Aim for readability (approx 80-100 chars), but no strict limit enforcing it.

### TypeScript Config
- **Strict Mode:** Enabled. Handle `null` and `undefined` explicitly.
- **Module Resolution:** `NodeNext`.
- **Target:** `ES2022`.

### Naming Conventions
- **Classes:** PascalCase (e.g., `ResumeBuilder`).
- **Files:**
  - Class definitions: PascalCase (e.g., `ResumeBuilder.ts`).
  - Utilities/Functions: camelCase (e.g., `compile.ts`, `path.ts`).
- **Functions/Methods:** camelCase (e.g., `compileToPdf`, `setBase`).
- **Variables:** camelCase.
- **Private Properties:** No underscore prefix needed, just use `private` keyword (e.g., `private parts`).

### Imports
- Use top-level imports.
- Use explicit extensions if necessary for NodeNext, though usually managed by tooling.
- Group imports: built-ins, external libraries, internal modules.

### Error Handling
- Use `try/catch` blocks for async operations, especially shell executions.
- Throw standard `Error` objects with clear, descriptive messages.
- Do not swallow errors silently; rethrow or log appropriately.

**Example:**
```typescript
try {
  await execa("typst", ["--version"]);
} catch (err) {
  throw new Error("Typst not found. Please install it.");
}
```

### File System & Paths
- Always use absolute paths when reading/writing files in agents, but use the provided `paths` utility (`src/utils/path.ts`) within the application code to resolve project paths.
- **Do not** hardcode absolute system paths in the source code; use `path` module or the internal `paths` helper.

### Testing Pattern
Since there is no assertion library:
1.  Import the code to be tested.
2.  Import `mockResume` or create mock data.
3.  Execute the function.
4.  Write the result to a file (e.g., `.typ` string or `.pdf`) in the `output/` directory for manual inspection.
5.  If adding a new "test", create a file in `src/compiler/test/` following the pattern of `compileTestBlock.test.ts`.

## 4. Dependencies
- **execa:** Use for spawning child processes (shell commands).
- **tsx:** Use for executing TypeScript files directly in dev.
- **fs:** Use built-in `fs` (or `fs/promises`) for file I/O.
- **chalk/ora:** Use for CLI output styling and spinners.

## 5. Agent Behavior
- **Proactive Checking:** Before running the build or test, check if `typst` is available using `typst --version`.
- **Safety:** Do not delete files outside of the `output/` directory.
- **Verification:** After modifying code, run `pnpm run typecheck` to ensure no strict type errors were introduced. Then run `pnpm run test-compile` to verify runtime success.

## 6. Example: Adding a New Block
When adding a new section to the resume (e.g., "Education"):
1.  Create `src/compiler/blocks/education.ts`.
2.  Define a function taking necessary data and returning a Typst string.
3.  Export it in `src/compiler/blocks/index.ts`.
4.  Update `ResumeBuilder` to include a method `addEducation(...)`.
5.  Update `compileTestBlock.test.ts` to call this new method with mock data.
6.  Run `pnpm run test-compile` and check `output/resume.pdf`.

```typescript
// src/compiler/blocks/education.ts
import { Education } from "../../../types/education.type";

export const EducationBlock = (edu: Education[]): string => {
  // Logic to format education as Typst code
  return `#block[...]`;
};
```
