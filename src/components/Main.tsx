import Hero from "./Hero"
import Rooms from "./Rooms"

const Main = () => {
  return (
    <main className="flex flex-col lg:flex-row pt-24">
      <Hero />
      <Rooms />
    </main>
  )
}

export default Main

