import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

// Derive __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "..");

// Create the .husky directory if it doesn't exist
const huskyDir = join(__dirname, ".husky");
if (!existsSync(huskyDir)) {
  mkdirSync(huskyDir, { recursive: true });
}

// Create the pre-commit hook file
const preCommitHookPath = join(huskyDir, "pre-commit");
const hookContent = `pnpm lint-staged && pnpm type-check

# Re-stage changes made by lint-staged
git add .

# Ensure the working directory is clean before committing
if ! git diff-index --quiet HEAD --; then
  echo "Some changes were made by the pre-commit hook. All changes are staged for this commit."
fi
`;

// Write the hook content to the file
writeFileSync(preCommitHookPath, hookContent, { mode: 0o755 });
console.log("Husky pre-commit hook added successfully.");
