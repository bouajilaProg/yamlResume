export function Profile(userSummary: string): string {
  return (`
  #section("profile")
  ${userSummary}
          `).trim();
}

