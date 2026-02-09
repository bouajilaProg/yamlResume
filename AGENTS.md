# Agent Instructions for bouajila-resume-generator

This document provides guidelines for AI agents and developers working on the `bouajila-resume-generator` project. Adhere to these instructions to maintain code quality, consistency, and functionality.

## 1. Project Overview

`bouajila-resume-generator` is a tool to generate resumes (specifically using Typst) from YAML data. It utilizes TypeScript, executes shell commands via `execa`, and relies on the `typst` CLI for the final PDF generation.

**Tech Stack:**
- **Runtime:** Node.js (Module type)
- **Language:** TypeScript (Strict, NodeNext)
- **Package Manager:** pnpm
- **Testing:** Vitest
- **Documentation:** Docusaurus
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
- **Run Dev (Single):**
  ```bash
  pnpm run dev
  ```
  Compiles the mock resume to `output/resume.pdf`.

- **Run Dev (Watch):**
  ```bash
  pnpm run dev:watch
  ```
  Watches for changes and re-compiles the PDF.

### Testing
We use **Vitest** for unit and integration tests.

- **Run All Tests:**
  ```bash
  pnpm run test
  ```

- **Run Tests in Watch Mode:**
  ```bash
  pnpm run test:watch
  ```

### Documentation
Documentation is built with Docusaurus in the `docs/` directory.

- **Start Docs Server:**
  ```bash
  pnpm run docs
  ```

## 3. Code Style & Conventions

### Formatting
- **Indentation:** 2 spaces.
- **Quotes:** Double quotes `"` for strings and imports.
- **Semicolons:** Always use semicolons at the end of statements.

### TypeScript Config
- **Strict Mode:** Enabled.
- **Module Resolution:** `NodeNext`.
- **Target:** `ES2022`.

### Error Handling
- Use `try/catch` blocks for async operations.
- Throw standard `Error` objects.

### Typst Escaping
- Use the `typstEscape` utility from `src/utils/escape.ts` for all user-provided strings to prevent breaking the Typst syntax.

## 4. Agent Behavior
- **Verification:** After modifying code, run `pnpm run typecheck` and `pnpm run test`.
- **Documentation:** If you add new features or sections, update the Docusaurus docs in `docs/docs/`.
