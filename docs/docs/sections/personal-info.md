---
sidebar_position: 1
---

# Personal Info

The `personalInfo` object contains your basic information, header details, and a professional summary.

## Why it's important

This is the most critical part of your resume. It tells the recruiter who you are, where you are located, and how to reach you. The professional summary (description) serves as your "elevator pitch," highlighting your core value proposition at a glance.

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
