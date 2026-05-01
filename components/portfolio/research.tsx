import { FlaskConical, BookOpen, FileText, Lightbulb } from "lucide-react"

const researchWork = {
  title: "Double Quantum Dot System with Fermionic Reservoirs",
  areas: [
    "ML classification of Markovian vs Non-Markovian dynamics",
    "Study effect of temperature on quantum systems",
    "Working on Variational Quantum Circuits",
    "Hamiltonian evolution research",
    "Quantum 2-qubit system behavior analysis",
  ],
}

const publications = [
  {
    title: "Architecting for Scale: Load Balancing vs Microservices",
    venue: "ICEAT 2025",
    contribution: "50% contribution",
    focus: "Scalable web architecture",
    type: "Publication",
  },
  {
    title: "SmartEdge360",
    venue: "Patent Application",
    contribution: "Edge-AI platform",
    focus: "Digital twins + voice-enabled compliance for MSMEs (especially rural). Focus on optimization and real-world impact.",
    type: "Patent",
  },
]

export function Research() {
  return (
    <section id="research" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <FlaskConical className="text-primary" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Research & Publications</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Research Work */}
          <div className="p-6 bg-background border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="text-primary" size={20} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Current Research</h3>
            </div>
            
            <h4 className="text-lg font-medium text-primary mb-4">{researchWork.title}</h4>
            
            <ul className="space-y-3">
              {researchWork.areas.map((area, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Publications */}
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      {pub.type === "Patent" ? (
                        <FileText className="text-primary" size={20} />
                      ) : (
                        <BookOpen className="text-primary" size={20} />
                      )}
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        pub.type === "Patent"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {pub.type}
                    </span>
                  </div>
                </div>
                
                <h4 className="font-semibold text-foreground mb-2">{pub.title}</h4>
                <p className="text-sm text-primary mb-2">{pub.venue}</p>
                <p className="text-sm text-muted-foreground mb-2">{pub.contribution}</p>
                <p className="text-sm text-muted-foreground">{pub.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
