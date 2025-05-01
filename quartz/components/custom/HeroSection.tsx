import { ComponentChildren } from "preact"
import { htmlToJsx } from "../../util/jsx"
import { QuartzComponentProps } from "../types"

const HeroSection = ({ fileData, cfg, tree, ...props }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title ?? "Hero Section Title"
  const content = htmlToJsx(fileData.filePath!, tree) as ComponentChildren
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["hero-description", ...classes].join(" ")

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h3>nhut9dev</h3>
        <h1>{title}</h1>

        <article class={classString}>{content}</article>
      </div>
    </section>
  )
}

export default HeroSection
