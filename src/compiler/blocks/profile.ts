export function profile(userSummary: string): string {
  return (`
  #section("profile")
  ${userSummary}
          `).trim();
}

