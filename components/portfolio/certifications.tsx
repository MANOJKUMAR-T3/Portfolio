import { Award, GraduationCap, Shield, Database, Bot, Network } from "lucide-react"

const certifications = [
  {
    category: "Quantum Computing",
    icon: GraduationCap,
    certs: [
      "Quantum Computing (C-DAC + IIT Roorkee)",
    ],
  },
  {
    category: "Machine Learning & AI",
    icon: Bot,
    certs: [
      "NPTEL Machine Learning (Elite)",
      "IBM AI Fundamentals",
      "KaaShiv Data Analysis Internship",
      "RapidMiner (Master + Professional)",
    ],
  },
  {
    category: "Cybersecurity",
    icon: Shield,
    certs: [
      "NPTEL Ethical Hacking (Elite + Silver)",
      "Cisco Cybersecurity",
      "Cisco CCNA",
    ],
  },
  {
    category: "Development & Automation",
    icon: Database,
    certs: [
      "MongoDB Basics",
      "Rust Course",
      "UiPath Agentic Automation",
    ],
  },
  {
    category: "Professional Skills",
    icon: Network,
    certs: [
      "Wadhwani Certifications (4)",
    ],
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Award className="text-primary" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <category.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold text-foreground">{category.category}</h3>
              </div>
              
              <ul className="space-y-2">
                {category.certs.map((cert, certIndex) => (
                  <li
                    key={certIndex}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
