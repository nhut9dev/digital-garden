import { version } from "../../package.json"
import { i18n } from "../i18n"
import style from "./styles/footer.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  links: Record<string, string>
}

interface IFooterItem {
  text: string
  link: string
}

const FooterItem = ({ text, link }: IFooterItem) => {
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  )
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const links = opts?.links ?? []

    return (
      <footer class={`${displayClass ?? ""}`}>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <FooterItem text={text} link={link} />
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
