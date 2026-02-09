# Projects

The `Projects` section showcases personal or professional projects you've worked on.

## Schema

```typescript
interface Project {
  id: number;
  title: string;
  notes: string[]; // List of bullet points describing the project
  tools: string;  // Comma-separated list of technologies used
  projectLink?: string; // Optional link to the project (e.g., GitHub, Demo)
}
```

## Example

```json
{
  "type": "project",
  "body": [
    {
      "id": 1,
      "title": "E-Commerce Platform",
      "notes": [
        "Built a full-featured online store with payment integration.",
        "Implemented real-time inventory tracking."
      ],
      "tools": "React, Node.js, Stripe, PostgreSQL",
      "projectLink": "https://github.com/user/project"
    }
  ]
}
```
