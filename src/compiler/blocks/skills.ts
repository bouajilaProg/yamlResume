import { Skills } from "../../../types/skills.type";
import { typstEscape } from "../../utils/escape";

function SkillsBlock(skills: Skills): string {
  const formatSkill = (item: { name: string }) => typstEscape(item.name);
  const languages = skills.languages.map(formatSkill).join(", ");
  const technologies = skills.technologies.map(formatSkill).join(", ");
  const softSkills = skills.softSkills.map(formatSkill).join(", ");

  return `
#one_liner((
  [*Languages*: ${languages}],
  [*Technologies*: ${technologies}],
  [*Soft Skills*: ${softSkills}]
))
`;
}

export { SkillsBlock };
