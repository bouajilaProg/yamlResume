# Certifications

The `Certifications` section lists your professional certifications.

## Schema

```typescript
interface Certification {
  id: number;
  name: string;
  issuingOrganization: string;
  issueDate: string;
}
```

## Example

```json
{
  "type": "certification",
  "body": [
    {
      "id": 1,
      "name": "AWS Certified Solutions Architect",
      "issuingOrganization": "Amazon Web Services",
      "issueDate": "2023"
    }
  ]
}
```
