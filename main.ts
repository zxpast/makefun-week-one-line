// Your Week in One Line — u-boge-your-week-in-one-line-d1c14ced
// One line, <=100 chars: the win (shipped five), the fail (won none),
// the chaos (the judge loved the line I almost deleted). Twist lands
// in the last words; self-own; concrete number; nothing padded.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Shipped five entries, won none — the judge loved the line I almost deleted.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
