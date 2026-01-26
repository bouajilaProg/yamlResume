function HobbiesBlock(hobbies: string[]): string {
  const hobbyList = hobbies.join(", ");

  return `
#paragraph("
  ${hobbyList}
")
`;
}

export { HobbiesBlock };
