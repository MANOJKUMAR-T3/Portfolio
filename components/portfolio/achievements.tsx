import { Medal, Star, TrendingUp, Award, Languages, Users } from "lucide-react"

const achievements = [
  {
    icon: Medal,
    title: "Rajya Puraskar Award",
    description: "Scouts & Guides recognition for exceptional service",
    category: "Award",
  },
  {
    icon: TrendingUp,
    title: "CubeSat Telemetry Improvement",
    description: "Improved telemetry efficiency by 30%",
    category: "Technical",
  },
  {
    icon: Star,
    title: "Authentication Model",
    description: "Achieved 70% effectiveness in behavioral authentication",
    category: "Research",
  },
  {
    icon: Award,
    title: "VLSI Finalist",
    description: "National-level VLSI Design competition finalist",
    category: "Competition",
  },
  {
    icon: Award,
    title: "Quantum Hackathon Finalist",
    description: "Advanced to finals in quantum computing hackathon",
    category: "Competition",
  },
  {
    icon: Languages,
    title: "Hindi Certification",
    description: "Completed 7 levels of Hindi language certification",
    category: "Language",
  },
]

const community = {
  scouts: [
    "Active participation in camps and rallies",
    "Social work initiatives",
    "March past (3 years)",
    "100+ hours of community service",
  ],
  outreach: [
    "Workshops for school students",
    "Internship mentoring for juniors",
  ],
}

const workshops = [
  {
    title: "IIT Madras Workshop",
    topic: "Space Technology",
  },
  {
    title: "C-DAC Quantum Lab Visit",
    topics: ["Photonic QC", "QKD systems", "Interaction with experts"],
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Medal className="text-primary" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Achievements & Community</h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-5 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <achievement.icon className="text-primary" size={20} />
                </div>
                <div>
                  <span className="text-xs text-primary font-medium">{achievement.category}</span>
                  <h3 className="font-semibold text-foreground mt-1">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Community & Outreach */}
          <div className="p-6 bg-background border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-primary" size={24} />
              <h3 className="text-xl font-semibold text-foreground">Community & Outreach</h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-primary mb-3">Scouts & Guides</h4>
                <ul className="space-y-2">
                  {community.scouts.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-3">Outreach Activities</h4>
                <ul className="space-y-2">
                  {community.outreach.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Workshops & Exposure */}
          <div className="p-6 bg-background border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-primary" size={24} />
              <h3 className="text-xl font-semibold text-foreground">Workshops & Exposure</h3>
            </div>

            <div className="space-y-4">
              {workshops.map((workshop, index) => (
                <div key={index} className="p-4 bg-card rounded-lg border border-border">
                  <h4 className="font-medium text-foreground mb-2">{workshop.title}</h4>
                  {workshop.topic && (
                    <p className="text-sm text-primary">{workshop.topic}</p>
                  )}
                  {workshop.topics && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {workshop.topics.map((topic, tIndex) => (
                        <span
                          key={tIndex}
                          className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
