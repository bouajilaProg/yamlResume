function LanguagesBlock(languages: string[]): string {
  const languageList = languages.join(", ");

  return `
#paragraph("
  ${languageList}
")
`;
}

export { LanguagesBlock };
