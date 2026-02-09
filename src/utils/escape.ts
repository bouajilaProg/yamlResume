/**
 * Escapes strings for safe use in Typst.
 * Handles double quotes, backslashes, and hashtag prefixes.
 */
export function typstEscape(str: string | undefined): string {
  if (!str) return "";
  return str
    .replace(/\\/g, "\\\\")
    .replace(/"/g, "\\\"")
    .replace(/#/g, "\\#");
}
