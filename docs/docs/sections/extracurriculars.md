---
sidebar_position: 7
---

# Extracurriculars

The `Extracurriculars` section includes volunteer work, leadership roles, or other activities outside of formal employment.

## Why it's important

These activities show that you are a well-rounded individual with interests and commitments beyond your job. They can demonstrate soft skills like leadership, teamwork, and community involvement that might not be as obvious from your work experience alone.

## Schema

```typescript
interface ExtraCurricularActivity {
  id: number;
  activityName: string;
  startDate: string;
  endDate?: string;
}
```

## Example

```json
{
  "type": "extracurricular",
  "body": [
    {
      "id": 1,
      "activityName": "Mentor - Women Who Code",
      "startDate": "2022",
      "endDate": "Present"
    }
  ]
}
```
