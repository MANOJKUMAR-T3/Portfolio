import { Trophy, Cpu, Atom, Calendar, MapPin } from "lucide-react"

const competitions = [
  {
    title: "VLSI Design Contest",
    achievement: "Top 5 National",
    description: "4-Qubit Flip-Chip Transmon with QML-based fraud detection",
    venue: "Pune (5-day conference)",
    highlight: true,
  },
]

const hackathons = [
  "Amaravati Quantum Valley",
  "Google Agentive AI",
  "Smart India Hackathon",
  "MSME Hackathon",
  "SDG Hackathon",
  "FinTech-a-Thon",
]

const symposiums = [
  {
    event: "NIT Trichy Pragyan",
    activities: ["Innova-con (Talkathon)", "FinTech Hackathon"],
  },
  {
    event: "Hackerz Symposium",
    activities: ["Organizer", "Event coordination", "Technical guidance"],
  },
]

const quantumCenter = {
  title: "Centre for Quantum Science and Technology",
  activities: [
    "Learning quantum computing basics",
    "Developing QML projects",
    "Working on QKD simulation",
    "Engaged in research papers",
  ],
}

export function Competitions() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Trophy className="text-primary" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Competitions & Hackathons</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Competition */}
          <div className="space-y-6">
            {competitions.map((comp, index) => (
              <div
                key={index}
                className="p-6 bg-card border-2 border-primary rounded-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-lg font-medium">
                  Featured
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Cpu className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{comp.title}</h3>
                    <span className="text-primary text-sm font-medium">{comp.achievement}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">{comp.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} />
                  {comp.venue}
                </div>
              </div>
            ))}

            {/* Hackathons */}
            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="font-semibold text-foreground mb-4">Hackathon Participations</h3>
              <div className="flex flex-wrap gap-2">
                {hackathons.map((hackathon, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm"
                  >
                    {hackathon}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Symposiums & Quantum Center */}
          <div className="space-y-6">
            {/* Symposiums */}
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-primary" size={20} />
                <h3 className="font-semibold text-foreground">Symposiums</h3>
              </div>
              <div className="space-y-4">
                {symposiums.map((symp, index) => (
                  <div key={index} className="p-4 bg-background rounded-lg">
                    <h4 className="font-medium text-primary mb-2">{symp.event}</h4>
                    <div className="flex flex-wrap gap-2">
                      {symp.activities.map((activity, aIndex) => (
                        <span
                          key={aIndex}
                          className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantum Center */}
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Atom className="text-primary" size={20} />
                <h3 className="font-semibold text-foreground">{quantumCenter.title}</h3>
              </div>
              <ul className="space-y-2">
                {quantumCenter.activities.map((activity, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
