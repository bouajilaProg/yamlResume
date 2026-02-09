# Contributing Guide

Welcome to the `bouajila-resume-generator` project! This guide explains the internal architecture and development workflow to help you contribute effectively.

## 1. Project Architecture

The project is structured to separate data definitions, layout templates, and the compilation logic.

### 🏛️ Core Architecture

- **Types (`types/`)**: Centralized TypeScript interfaces that define the structure of resume data (e.g., `Education`, `Experience`, `Skills`). These act as the contract between the user's data and the generator.
- **Templates (`template/`)**: Written in [Typst](https://typst.app/), these files define the visual layout and reusable components (like headers, sections, and experience blocks).
- **Blocks (`src/compiler/blocks/`)**: TypeScript functions that transform structured data into Typst code strings. Each block corresponds to a template component.
- **ResumeBuilder (`src/compiler/blocks/ResumeBuilder.ts`)**: Orchestrates the assembly of blocks into a complete Typst document.
- **Compiler (`src/index.ts`)**: The main entry point that takes the assembled Typst string, saves it to a temporary file, and invokes the `typst` CLI to generate the PDF.

### 🛡️ Safety & Escaping

All user-provided strings must be passed through the `typstEscape` utility found in `src/utils/escape.ts`. This prevents special characters (like `#`, `"`, or `\`) from breaking the Typst syntax.

## 2. Development Workflow

### Prerequisites
- [Node.js](https://nodejs.org/) (>= 18)
- [pnpm](https://pnpm.io/)
- [Typst CLI](https://github.com/typst/typst) installed and available in your `PATH`.

### Commands

| Command | Description |
| :--- | :--- |
| `pnpm run build` | Compiles TypeScript to JavaScript in `dist/`. |
| `pnpm run typecheck` | Runs the TypeScript compiler in `noEmit` mode to check for errors. |
| `pnpm run dev` | Generates a mock resume from `src/dev.ts` to `output/resume.pdf`. |
| `pnpm run dev:watch` | Watches for changes in `src/` and `template/` and re-compiles the mock resume automatically. |
| `pnpm run test` | Executes the test suite using Vitest. |
| `pnpm run docs` | Starts the Docusaurus development server. |

## 3. How to Contribute

1.  **Adding a New Section**:
    - Define the data interface in `types/`.
    - Create a corresponding Typst component in `template/standard/lib/`.
    - Implement a new block in `src/compiler/blocks/` to bridge the two.
    - Update `ResumeBuilder.ts` to support the new section.
2.  **Updating Documentation**:
    - All documentation is located in the `docs/` directory and built with Docusaurus.
    - If you modify a schema, ensure the corresponding page in `docs/docs/sections/` is updated.
3.  **Writing Tests**:
    - Add unit tests for new blocks in `src/compiler/blocks/[name].test.ts`.
    - Use `src/index.test.ts` for integration tests that verify PDF generation.

## 4. Coding Standards

- **Strict Typing**: Avoid using `any`. Ensure all interfaces are properly defined.
- **Formatting**: 2-space indentation and semicolons are required.
- **Clean Code**: Keep blocks focused and use descriptive names for Typst components.
