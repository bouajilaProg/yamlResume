import { Hobbies } from "../../../types/hobbies.type";

function HobbiesBlock(hobbies: Hobbies): string {
  const hobbyList = hobbies.map(h => h.name).join(", ");

  return `
#one_liner(([${hobbyList}]))
`.trim();
}

export { HobbiesBlock };
