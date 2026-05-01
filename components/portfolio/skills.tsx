import { Code2, Database, Wrench, Lightbulb } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C", "C++", "Python", "Java (Basics)", "Rust", "JavaScript"],
  },
  {
    title: "Web Development",
    icon: Wrench,
    skills: ["HTML", "CSS", "Figma"],
  },
  {
    title: "Database & Tools",
    icon: Database,
    skills: ["SQL", "MySQL", "Qiskit", "MATLAB", "Power BI"],
  },
  {
    title: "Concepts",
    icon: Lightbulb,
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "FinTech"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Code2 className="text-primary" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <category.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm font-medium"
                  >
                    {skill}
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
