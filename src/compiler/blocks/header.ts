import { Contact } from "../../../types/personalInfo.type";
import { typstEscape } from "../../utils/escape";

function Header(Name: string, contacts: Contact[]): string {
  const FormatedContacts = contacts.map(
    contact => `(type: "${typstEscape(contact.type.toLowerCase())}", text: "${typstEscape(contact.value)}")`
  );

  const res = `#header(
  "${typstEscape(Name)}",
  (
    ${FormatedContacts.join(",\n    ")}
)
)`;

  return res;
}

export { Header };
