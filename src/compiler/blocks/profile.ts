export function Profile(userSummary: string): string {
  return `
  #paragraph("
  ${userSummary.trim()}
")`;
}

