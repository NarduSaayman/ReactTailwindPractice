import Card from "./Card"
import Home from "./components/Home"
import Services from "./components/Services"
import Header from "./components/Header"
import "./index.css"
import Contact from "./components/Contact"
import Blog from "./components/Blog"
import Team from "./components/Team"

function App() {
  return (
    <>
      <div className="z-10 md:px-[50px] xl:px-[300px] sticky top-0 bg-body">
        <Header />
      </div>

      <div className="md:px-[50px] xl:px-[300px] bg-body">
        <Home />
      </div>

      <div className="md:px-[50px] xl:px-[300px] bg-body-secondary">
        <Services />
      </div>

      <div className="md:px-[50px] xl:px-[300px] bg-body-secondary">
        <Contact />
      </div>

      <div className="md:px-[50px] xl:px-[300px] bg-body-secondary">
        <Blog />
      </div>

      <div>
        <Team />
      </div>
    </>
  )
}

export default App
