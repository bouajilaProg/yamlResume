# Personal Info

The `personalInfo` object contains your basic information, header details, and a professional summary.

## Schema

```typescript
interface PersonalInfo {
  name: string; // Your full name
  location: string; // Your city, state/country
  description: string; // A brief professional summary or "Profile"
  contact: Contact[]; // List of contact methods
}

interface Contact {
  id: number;
  type: "Email" | "Phone" | "Website" | "GitHub" | "LinkedIn";
  value: string;
}
```

## Example

```json
{
  "personalInfo": {
    "name": "Jane Developer",
    "location": "San Francisco, CA",
    "description": "Experienced Full-Stack Developer with 5+ years building scalable web applications.",
    "contact": [
      { "id": 1, "type": "Email", "value": "jane.developer@example.com" },
      { "id": 2, "type": "LinkedIn", "value": "linkedin.com/in/janedev" }
    ]
  }
}
```
