# Work Experience

The `WorkExperience` section describes your professional history.

## Schema

```typescript
interface WorkExperience {
  id: number;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  keywords: string; // Comma-separated list
}
```

## Example

```json
{
  "type": "work_experience",
  "body": [
    {
      "id": 1,
      "jobTitle": "Software Engineer",
      "company": "Tech Corp",
      "location": "San Francisco, CA",
      "startDate": "Jan 2020",
      "endDate": "Present",
      "summary": "Full-stack development using Node.js and React.",
      "keywords": "TypeScript, React, AWS"
    }
  ]
}
```
