import fs from "fs"
import path from "path"
import matter from "gray-matter"
import fse from "fs-extra"

const SOURCE_DIR = "content-private"
const TARGET_DIR = "content"

/**
 * Recursively removes all empty directories inside a given path.
 */
function removeEmptyDirs(dir) {
  const files = fs.readdirSync(dir)
  if (files.length === 0) {
    fs.rmdirSync(dir)
    return
  }

  for (const file of files) {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      removeEmptyDirs(fullPath)
    }
  }

  // Re-check after inner dirs may have been removed
  if (fs.existsSync(dir) && fs.readdirSync(dir).length === 0) {
    fs.rmdirSync(dir)
  }
}

function copyFilteredContent() {
  // Remove old content folder
  fse.removeSync(TARGET_DIR)
  fse.ensureDirSync(TARGET_DIR)

  // Copy files from source to target with filtering
  fse.copySync(SOURCE_DIR, TARGET_DIR, {
    filter: (src, dest) => {
      const relative = path.relative(SOURCE_DIR, src)

      // Skip .obsidian folder
      if (relative.startsWith(".obsidian")) {
        console.log("🚫 Skipping .obsidian:", src)
        return false
      }

      // Always copy folders; actual filtering happens inside
      if (fs.statSync(src).isDirectory()) return true

      // Keep non-Markdown files
      const ext = path.extname(src)
      if (ext !== ".md") return true

      // Check for draft: true in frontmatter
      const fileContent = fs.readFileSync(src, "utf-8")
      const { data } = matter(fileContent)

      if (data.draft === true) {
        console.log("🚫 Skipping draft:", relative)
        return false
      }

      return true
    },
  })

  // Clean up empty directories
  removeEmptyDirs(TARGET_DIR)

  console.log(`✅ Content deployed successfully from "${SOURCE_DIR}" to "${TARGET_DIR}".`)
}

copyFilteredContent()
