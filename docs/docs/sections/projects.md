---
sidebar_position: 5
---

# Projects

The `Projects` section showcases personal or professional projects you've worked on.

## Why it's important

Projects allow you to demonstrate your skills in a practical way, especially if they are personal or open-source. They show initiative, passion, and the ability to build something from scratch. For developers, a strong projects section can be as influential as work experience.

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
