import { EducationItem } from "../../../types/education.type";
import { typstEscape } from "../../utils/escape";

function EducationBlock(education: EducationItem): string {
  const date = `${typstEscape(education.startDate)} - ${typstEscape(education.endDate)}`;
  const tags = education.keySkills.split(",").map((k: string) => typstEscape(k.trim()));

  return `experience(
  title: "${typstEscape(education.degreeName)}",
  titleRole: "${typstEscape(education.institution)}",
  description: "${typstEscape(education.description)}",
  location: "",
  date: "${date}",
  tags: (${tags.map((t: string) => `"${t}"`).join(", ")})
)`;
}

export { EducationBlock };
