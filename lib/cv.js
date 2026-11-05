import fs from "node:fs";
import path from "node:path";

// Shows the CV button automatically once public/cv.pdf exists.
export function getCvHref() {
  return fs.existsSync(path.join(process.cwd(), "public", "cv.pdf")) ? "/cv.pdf" : null;
}
