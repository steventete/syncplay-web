import { Music, Users } from "lucide-react"

const roomsData = [
  {
    id: "2a6dwj3",
    name: "Reggaeton Vibes",
    description: "Feel the rhythm of Latin America",
    users: 42,
  },
  {
    id: "7k9fgh1",
    name: "Rock Legends",
    description: "Classic and modern rock hits",
    users: 28,
  },
  {
    id: "3m2npq5",
    name: "Pop Paradise",
    description: "Top charts and catchy tunes",
    users: 56,
  },
  {
    id: "9r4stz8",
    name: "Jazz Lounge",
    description: "Smooth jazz for relaxation",
    users: 15,
  },
  {
    id: "5x7yvw2",
    name: "Electronic Dreams",
    description: "Beats and synths all night long",
    users: 37,
  },
]

const Rooms = () => {
  return (
    <section className="w-full lg:w-1/2 h-screen overflow-y-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-foreground animate-slide-in">Open Rooms</h2>
      <div className="grid gap-6 pb-20">
        {roomsData.map((room, index) => (
          <div
            key={room.id}
            className="bg-background p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-custom animate-slide-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-foreground">{room.name}</h3>
              <span className="flex items-center text-muted">
                <Users className="size-4 mr-1" />
                {room.users}
              </span>
            </div>
            <p className="text-muted mb-4">{room.description}</p>
            <button className="flex items-center justify-center w-full bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 ">
              <Music className="size-4 mr-2" />
              Join Room
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Rooms

