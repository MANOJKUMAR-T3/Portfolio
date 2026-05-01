import { FolderGit2, Shield, Key, Satellite, CreditCard, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "QML-Based Behavioral Biometric Authentication",
    icon: Shield,
    description: "Revolutionary post-login continuous authentication system using Quantum Machine Learning",
    highlights: [
      "Identifies gap in current authentication systems (only pre-login)",
      "Solves issue of bots operating after login or humans mimicking bots",
      "Eliminates user interruptions like CAPTCHA",
      "Analyzes user behavior continuously in real-time",
      "If behavior is human → no interruption",
      "If behavior is bot → access denied immediately",
      "Provides post-login continuous authentication",
    ],
    tags: ["QML", "Security", "Biometrics", "Authentication"],
    status: "Active",
  },
  {
    title: "Quantum Key Distribution (BB84) Simulator",
    icon: Key,
    description: "Comprehensive Python-based simulator for quantum cryptography protocols",
    highlights: [
      "Quantum channel attenuation modeling",
      "Detector noise (inefficiency, dark count)",
      "Eavesdropping attacks (coherent, translucent, intercept-resend)",
      "QBER (Quantum Bit Error Rate) calculation",
      "SKR (Secret Key Rate) analysis",
      "8 graphs for comprehensive analysis",
      "User-defined parameters support",
      "Channel safety decision (abort/continue)",
    ],
    tags: ["Python", "Quantum", "Cryptography", "BB84"],
    status: "Completed",
  },
  {
    title: "SAR Image Colorization",
    icon: Satellite,
    description: "ML-powered solution to convert grayscale satellite images into colorized images",
    highlights: [
      "Converts grayscale satellite images to color",
      "Built using trained ML model",
      "Web platform for conversion & storage",
      "Data analysis capabilities",
      "Improves satellite data usability",
    ],
    tags: ["Machine Learning", "Computer Vision", "Web Development"],
    status: "Completed",
  },
  {
    title: "AI Model for Fraudulent Loan Detection",
    icon: CreditCard,
    description: "Intelligent system to detect fake loan applications using behavioral and financial data",
    highlights: [
      "Detects fake loan applications",
      "Uses behavioral + financial data analysis",
      "Helps microfinance institutions avoid losses",
      "Useful in rural and urban areas",
    ],
    tags: ["AI", "FinTech", "Fraud Detection", "ML"],
    status: "Prefinal Project",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <FolderGit2 className="text-primary" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <project.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        project.status === "Active"
                          ? "bg-green-500/10 text-green-400"
                          : project.status === "Completed"
                          ? "bg-primary/10 text-primary"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                <ExternalLink className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
              </div>

              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

              <ul className="space-y-1.5 mb-4">
                {project.highlights.slice(0, 4).map((highlight, hIndex) => (
                  <li key={hIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {highlight}
                  </li>
                ))}
                {project.highlights.length > 4 && (
                  <li className="text-sm text-primary">+{project.highlights.length - 4} more features</li>
                )}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
