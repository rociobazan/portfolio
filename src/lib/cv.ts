import { existsSync } from "node:fs";
import path from "node:path";
import { site } from "@/config/site";

/** Se fija, al armar el sitio, si el PDF del CV está en /public. */
export function cvExists(): boolean {
  return existsSync(path.join(process.cwd(), "public", site.cvPath));
}
