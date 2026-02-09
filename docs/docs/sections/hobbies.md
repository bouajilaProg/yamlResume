# Hobbies

The `Hobbies` section lists your personal interests.

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
