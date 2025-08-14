import { Music4 } from "lucide-react"

const Topbar = () => {
  return (
    <header className="w-full max-w-md h-16 text-foreground flex items-center justify-center px-6 shadow-lg dark:shadow-gray-800 rounded-full bg-transparent border border-custom backdrop-blur-sm fixed top-7 left-1/2 -translate-x-1/2 z-10 transition-all duration-300 ease-in-out">
      <span className="flex items-center justify-center gap-2">
        <Music4 className="size-8 text-primary" strokeWidth={2} />
        <h1 className="text-3xl font-bold text-foreground">SyncPlay</h1>
      </span>
    </header>
  )
}

export default Topbar

