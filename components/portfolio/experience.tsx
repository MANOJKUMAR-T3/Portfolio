import { Briefcase, Rocket, Satellite, Navigation, Users, Wrench } from "lucide-react"

const experiences = [
  {
    company: "ULOG3 Startup",
    role: "CubeSat + Semiconductor Project",
    type: "Startup",
    responsibilities: [
      {
        title: "Ground Station",
        icon: Satellite,
        tasks: [
          "Satellite data collection & analysis",
          "Data sharing across departments",
        ],
      },
      {
        title: "Satellite Navigation Lead",
        icon: Navigation,
        tasks: [
          "Tracking satellite using Raspberry Pi + NEO-6M GPS",
          "Real-time balloon satellite launch",
          "Networking using LAN",
        ],
      },
    ],
  },
]

const leadership = [
  {
    icon: Users,
    title: "Team Lead",
    description: "Led teams in multiple hackathons, motivated team during pressure situations",
  },
  {
    icon: Wrench,
    title: "Mentor",
    description: "Guided juniors through internships, conducted workshops for school students",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Briefcase className="text-primary" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience & Leadership</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary">
                      <Rocket className="text-primary" size={24} />
                    </div>
                    <div className="w-0.5 bg-border flex-1 mt-4" />
                  </div>
                  
                  <div className="pb-12 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-6">{exp.role}</p>
                    
                    <div className="space-y-4">
                      {exp.responsibilities.map((resp, rIndex) => (
                        <div
                          key={rIndex}
                          className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center">
                              <resp.icon className="text-primary" size={18} />
                            </div>
                            <h4 className="font-medium text-foreground">{resp.title}</h4>
                          </div>
                          <ul className="space-y-2">
                            {resp.tasks.map((task, tIndex) => (
                              <li key={tIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Leadership */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-6">Leadership & Responsibilities</h3>
            {leadership.map((item, index) => (
              <div
                key={index}
                className="p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}

            <div className="p-5 bg-card border border-border rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Key Contributions</h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Simplified complex concepts for diverse audiences
                </li>
                <li className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Conducted workshops for school students
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
