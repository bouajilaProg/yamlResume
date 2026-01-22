import { EducationItem } from "../../../types/education.type";

function EducationBlock(education: EducationItem): string {
  const date = `${education.startDate} - ${education.endDate}`;
  const tags = education.keySkills.split(",").map((k: string) => k.trim());

  return `#experience(
  title: "${education.degreeName}",
  titleRole: "${education.institution}",
  description: "${education.description}",
  location: "",
  date: "${date}",
  tags: (${tags.map((t: string) => `"${t}"`).join(", ")})
)`;
}

export { EducationBlock };
