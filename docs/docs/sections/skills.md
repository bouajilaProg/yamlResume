---
sidebar_position: 4
---

# Skills

The `Skills` section allows you to categorize your technical and soft skills.

## Why it's important

This section provides a quick way for recruiters and Applicant Tracking Systems (ATS) to identify if you have the specific technical requirements for a job. Grouping them by category makes it easier to read and highlights your versatility.

## Schema

The `Skills` object is divided into three fixed categories. All fields are required (though they can be empty arrays).

```typescript
interface Skills {
  languages: SkillItem[];    // Programming or spoken languages (if grouped here)
  technologies: SkillItem[]; // Frameworks, libraries, tools
  softSkills: SkillItem[];   // Interpersonal skills
}

interface SkillItem {
  id: number;
  name: string;
  type: "LANG" | "TECH" | "SOFT";
}
```

## Layout

In the generated PDF, skills are presented as a "One-Liner" where each category is bolded followed by its respective items separated by commas. This compact design saves space while maintaining high readability.

## Example

```json
{
  "type": "skills",
  "body": {
    "languages": [{ "id": 1, "name": "TypeScript", "type": "LANG" }],
    "technologies": [{ "id": 2, "name": "React", "type": "TECH" }],
    "softSkills": [{ "id": 3, "name": "Leadership", "type": "SOFT" }]
  }
}
```
