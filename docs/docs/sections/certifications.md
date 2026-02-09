---
sidebar_position: 6
---

# Certifications

The `Certifications` section lists your professional certifications.

## Why it's important

Certifications provide third-party validation of your skills. They show that you have met a certain standard of knowledge and are committed to continuous learning and staying current in your field.

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
