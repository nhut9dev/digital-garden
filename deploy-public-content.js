import fs from "fs"
import path from "path"
import matter from "gray-matter"
import fse from "fs-extra"

const SOURCE_DIR = "content-private"
const TARGET_DIR = "content"

function copyContent() {
  // Xóa folder cũ
  fse.removeSync(TARGET_DIR)
  fse.ensureDirSync(TARGET_DIR)

  // Copy file, folder
  fse.copySync(SOURCE_DIR, TARGET_DIR, {
    filter: (src) => {
      if (fs.statSync(src).isDirectory()) return true

      const ext = path.extname(src)
      if (ext !== ".md") return true // Giữ lại file không phải markdown

      const fileContent = fs.readFileSync(src, "utf-8")
      const { data } = matter(fileContent)

      if (data.draft === true) {
        console.log("🚫 Bỏ qua draft:", src)
        return false
      }

      return true
    },
  })

  console.log("✅ Đã deploy content từ", SOURCE_DIR)
}

copyContent()
