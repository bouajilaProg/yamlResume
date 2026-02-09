---
sidebar_position: 2
---

# Quickstart

Get your professional resume ready in minutes.

## 1. Installation

First, install the generator and ensure you have [Typst](https://typst.app/docs/install/) installed on your system.

```bash
pnpm add bouajila-resume-generator
```

## 2. Define your Resume

Create a JSON or TypeScript object following the `Resume` structure.

```typescript
import { Resume, SectionType } from "bouajila-resume-generator";

const myResume: Resume = {
  name: "Jane Doe",
  description: "Software Engineer",
  template: "standard",
  lastUpdate: "2025-02-09",
  personalInfo: {
    name: "Jane Doe",
    location: "New York, NY",
    contact: [
      { id: 1, type: "Email", value: "jane.doe@example.com" }
    ]
  },
  sections: [
    {
      type: SectionType.WorkExperience,
      body: [
        {
          id: 1,
          jobTitle: "Senior Developer",
          company: "Tech Corp",
          location: "Remote",
          startDate: "2020",
          endDate: "Present",
          summary: "Building amazing things.",
          keywords: "React, Node.js"
        }
      ]
    }
  ]
};
```

## 3. Generate PDF

Use the `compile` function to produce your PDF.

```typescript
import { compile } from "bouajila-resume-generator";

await compile(myResume, { outputPath: "./resume.pdf" });
```
