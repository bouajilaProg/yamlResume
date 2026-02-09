# Education

The `Education` section highlights your academic background.

## Schema

```typescript
interface EducationItem {
  id: number;
  degreeType: "BS" | "MS" | "PhD";
  degreeName: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string;
  keySkills: string; // Comma-separated list
}
```

## Example

```json
{
  "type": "education",
  "body": [
    {
      "id": 1,
      "degreeType": "BS",
      "degreeName": "Computer Science",
      "institution": "University of Tech",
      "startDate": "2016",
      "endDate": "2020",
      "description": "Graduated with Honors.",
      "keySkills": "Algorithms, Data Structures"
    }
  ]
}
```
