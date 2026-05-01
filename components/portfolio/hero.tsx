"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-primary font-mono text-sm tracking-wider uppercase">
              Hello, I am
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              MANOJ KUMAR T
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Computer Science <span className="text-primary">Engineer</span>
            </p>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              3rd-year CSE student specializing in{" "}
              <span className="text-primary font-medium">Quantum Machine Learning</span> and{" "}
              <span className="text-primary font-medium">Quantum Cryptography</span>. 
              Building the future of secure computing through innovative research and practical implementations.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
                <ArrowDown size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <a
                href="https://github.com/MANOJKUMAR-T3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/manoj-kumar-577659291"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email - Go to Contact Section"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/30 to-transparent flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-card border border-border flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary">QC</span>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute top-0 right-0 bg-card border border-border px-3 py-1.5 rounded-full text-sm text-muted-foreground animate-pulse">
                Quantum ML
              </div>
              <div className="absolute bottom-10 -left-4 bg-card border border-border px-3 py-1.5 rounded-full text-sm text-muted-foreground animate-pulse delay-75">
                Research
              </div>
              <div className="absolute bottom-0 right-10 bg-card border border-border px-3 py-1.5 rounded-full text-sm text-muted-foreground animate-pulse delay-150">
                Full-Stack
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  )
}
