import { WorkExperience } from "../../../types/experience.type";
import { typstEscape } from "../../utils/escape";

function ExperienceBlock(experience: WorkExperience): string {
  const date = `${typstEscape(experience.startDate)} - ${typstEscape(experience.endDate)}`;
  const tags = experience.keywords.split(",").map(k => typstEscape(k.trim()));
  const description = typstEscape(experience.summary);

  return `
  experience(
  title: "${typstEscape(experience.jobTitle)}",
  titleRole: "${typstEscape(experience.company)}",
  description: "${description}",
  location: "${typstEscape(experience.location)}",
  date: "${date}",
  tags: (${tags.map(t => `"${t}"`).join(",  ")})
)`.trim();
}

export { ExperienceBlock };
