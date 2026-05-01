import { User, Atom, BrainCircuit, Shield } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Atom,
      title: "Quantum Computing",
      description: "Exploring quantum algorithms and QKD protocols",
    },
    {
      icon: BrainCircuit,
      title: "Machine Learning",
      description: "Applying ML to solve real-world problems",
    },
    {
      icon: Shield,
      title: "Cryptography",
      description: "Building secure authentication systems",
    },
  ]

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <User className="text-primary" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a 3rd-year Computer Science and Engineering student who has explored multiple 
              technologies and is continuously learning new domains. My current focus is on{" "}
              <span className="text-primary font-medium">Quantum Machine Learning</span> and{" "}
              <span className="text-primary font-medium">Quantum Cryptography</span>, along with 
              practical implementation through projects and research.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in classical computing and a passion for emerging technologies, 
              I bridge the gap between theoretical quantum mechanics and practical software engineering. 
              My work spans from building authentication systems to simulating quantum key distribution 
              protocols.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm">
                3rd Year CSE
              </span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm">
                Research Enthusiast
              </span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm">
                Team Leader
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
