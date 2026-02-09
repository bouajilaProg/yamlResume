# Extracurriculars

The `Extracurriculars` section includes volunteer work, leadership roles, or other activities outside of formal employment.

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
