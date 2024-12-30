import Author from "./components/authorCard"
import Feature from "./components/feature"
import Footer from "./components/footer"
import Mega from "./components/mega"
import Navbar from "./components/navbar"


function Page() {
  return (
    <div>
      <Navbar />
      <Feature />
      <Mega />
      <Author />
      <Footer />
    </div>
  )
}

export default Page
