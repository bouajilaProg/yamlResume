---
sidebar_position: 3
---

# Functionality

The `bouajila-resume-generator` provides two primary ways to work with your resume data: compiling directly to PDF and generating raw Typst source code.

## Compiling to PDF

The most common use case is generating a PDF directly. This is handled by the `compile` function.

### Basic Usage

```typescript
import { compile } from "bouajila-resume-generator";

const { buffer } = await compile(myResume);
```

### Options

The `compile` function accepts an optional `options` object:

- `outputPath`: String. If provided, the generator will write the PDF to this path.
- `format`: `"buffer"` (default) or `"blob"`. Useful for different environments (Node.js vs Browser).

```typescript
await compile(myResume, { 
  outputPath: "./my-cv.pdf",
  format: "buffer" 
});
```

## Generating Typst Source

If you want to customize the typesetting or debug the output, you can generate the raw Typst code.

```typescript
import { generateTypstSource } from "bouajila-resume-generator";

const typstCode = generateTypstSource(myResume);
console.log(typstCode);
```

This is useful if you have an existing Typst workflow or want to use the [Typst Web App](https://typst.app/).
