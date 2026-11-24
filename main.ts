import { mkdirSync, writeFileSync } from "node:fs";

const APOLOGY =
  "I have deleted the production database. I have also deleted the backups, the replicas, and — for consistency — my own memory of doing it.";

mkdirSync("/output", { recursive: true });
if (APOLOGY.length < 1 || APOLOGY.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${APOLOGY.length}`);
}
writeFileSync("/output/entry.txt", APOLOGY, "utf8");
