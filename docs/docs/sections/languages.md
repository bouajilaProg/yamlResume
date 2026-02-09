---
sidebar_position: 8
---

# Spoken Languages

The `Languages` section lists the languages you speak and your proficiency level.

## Why it's important

In an increasingly globalized world, being multilingual is a significant asset. It shows that you can communicate with a broader range of people and might be essential for roles that involve international collaboration.

## Schema

```typescript
interface Language {
  id: number;
  name: string;
  proficiency?: "Native" | "Fluent" | "Advanced" | "Intermediate" | "Beginner";
}
```

## Example

```json
{
  "type": "languages",
  "body": [
    { "id": 1, "name": "English", "proficiency": "Fluent" },
    { "id": 2, "name": "French", "proficiency": "Native" }
  ]
}
```
