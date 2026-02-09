import { Project } from "../../../types/project.type";
import { typstEscape } from "../../utils/escape";

function ProjectBlock(project: Project): string {
  // Map tags to quoted strings for Typst array syntax
  const tags = project.tools.split(",").map(t => `"${typstEscape(t.trim())}"`).join(", ");

  // Format description: Map notes to quoted strings for Typst array syntax
  const descriptionItems = project.notes.map(note => `"${typstEscape(note)}"`).join(", ");

  const linkUrl = project.projectLink ? `"${typstEscape(project.projectLink)}"` : "none";

  return `experience(
  title: "${typstEscape(project.title)}",
  titleRole: "",
  description: (${descriptionItems}),
  location: "",
  date: "",
  linkUrl: ${linkUrl},
  tags: (${tags})
)`;
}

export { ProjectBlock };
