# Spoken Languages

The `Languages` section lists the languages you speak and your proficiency level.

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
