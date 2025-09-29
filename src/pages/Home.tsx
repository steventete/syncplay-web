import Main from "../components/Main"
import Topbar from "../components/Topbar"

const Home = () => {
  return (
    <div className="h-screen bg-background text-foreground overflow-hidden p-0 m-0">
      <Topbar />
      <Main />
    </div>
  )
}

export default Home

