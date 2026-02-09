import { typstEscape } from "../../utils/escape";

export function Profile(userSummary: string): string {
  return `
  #v(0.4em)
  #paragraph("${typstEscape(userSummary).trim()}")
#v(0.6em)
`;
}

