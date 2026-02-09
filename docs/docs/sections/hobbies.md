---
sidebar_position: 9
---

# Hobbies

The `Hobbies` section lists your personal interests.

## Why it's important

While often considered optional, hobbies can give recruiters a sense of your personality and cultural fit. They can also be great conversation starters during an interview and might even relate to the job in unexpected ways (e.g., strategic thinking from chess).

## Schema

```typescript
interface Hobby {
  id: number;
  name: string;
  description?: string;
}
```

## Example

```json
{
  "type": "hobbies",
  "body": [
    { "id": 1, "name": "Open Source" },
    { "id": 2, "name": "Photography", "description": "Analog photography and film developing." }
  ]
}
```
