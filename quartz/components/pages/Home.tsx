import HeroSection from "../custom/HeroSection"
import { QuartzComponentProps } from "../types"

const Home = (props: QuartzComponentProps) => {
  return (
    <div className="home-page">
      <HeroSection {...props} />
    </div>
  )
}

export default Home
