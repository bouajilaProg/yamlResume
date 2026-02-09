# Skills

The `Skills` section allows you to categorize your technical and soft skills.

## Schema

```typescript
interface Skills {
  languages: SkillItem[];
  technologies: SkillItem[];
  softSkills: SkillItem[];
}

interface SkillItem {
  id: number;
  name: string;
  type: "LANG" | "TECH" | "SOFT";
}
```

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
