"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ShieldCheck, UploadCloud, UserCheck, LayoutDashboard } from "lucide-react"
import { LoginModal } from "@/components/auth/LoginModal"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function LandingPage() {
  const [isLoginOpen, setIsLoginOpen] = React.useState(false)

  const heroImage = PlaceHolderImages.find(img => img.id === 'academic-hero')

  const features = [
    {
      title: "Secure Exam Keys",
      description: "Teachers control student access with unique system-generated keys.",
      icon: <ShieldCheck className="h-8 w-8 text-secondary" />
    },
    {
      title: "Easy Paper Upload",
      description: "Fast and intuitive workflow for teachers to digitize physical papers.",
      icon: <UploadCloud className="h-8 w-8 text-secondary" />
    },
    {
      title: "Student Friendly",
      description: "Simple, distraction-free interface designed for focus and clarity.",
      icon: <UserCheck className="h-8 w-8 text-secondary" />
    },
    {
      title: "Admin Control",
      description: "Centralized monitoring and approval system for institutions.",
      icon: <LayoutDashboard className="h-8 w-8 text-secondary" />
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-6 h-16 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-secondary shadow-sm">EX</div>
          <span className="text-xl font-headline font-bold text-secondary tracking-tight">Exam Center</span>
        </div>
        <Button 
          variant="outline" 
          onClick={() => setIsLoginOpen(true)}
          className="border-primary hover:bg-primary hover:text-primary-foreground transition-all font-semibold"
        >
          Login
        </Button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 px-6 overflow-hidden bg-gradient-to-br from-background via-white to-accent/20">
          <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-secondary text-sm font-semibold border border-primary/30 mx-auto">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              The Future of Education
            </div>
            <h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-secondary leading-tight max-w-4xl mx-auto">
              EX – Smart Digital <span className="text-primary drop-shadow-sm">Exam Center</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A secure platform where teachers upload exams and students attempt tests using special access keys.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                size="lg" 
                onClick={() => setIsLoginOpen(true)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 h-14 rounded-full shadow-lg hover:shadow-xl transition-all font-bold"
              >
                Login to Get Started
              </Button>
            </div>

            {heroImage && (
              <div className="mt-16 relative group max-w-5xl mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <Image 
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={1080}
                  height={600}
                  priority
                  className="relative rounded-[2rem] shadow-2xl border border-white/20"
                  data-ai-hint={heroImage.imageHint}
                />
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-headline font-bold text-secondary">Why Institutions Choose EX?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Modern features designed for modern classrooms.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => (
                <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all hover:-translate-y-1 bg-background group">
                  <CardHeader>
                    <div className="p-3 bg-white w-fit rounded-2xl shadow-sm mb-4 group-hover:bg-primary transition-colors">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-secondary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Paper Section */}
        <section className="py-24 px-6 bg-accent/10">
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-12">
               <h2 className="text-3xl font-headline font-bold text-secondary mb-4">Sample Exam Paper</h2>
               <p className="text-muted-foreground">Preview the student testing experience</p>
             </div>
             <Card className="shadow-xl border-none overflow-hidden rounded-3xl">
               <div className="bg-secondary p-6 text-white flex justify-between items-center">
                 <div>
                   <h3 className="text-2xl font-bold">Mathematics Mid-Term</h3>
                   <p className="opacity-80">Final Year Examination</p>
                 </div>
                 <div className="bg-white/20 px-4 py-2 rounded-xl text-sm font-medium backdrop-blur-sm">
                   Duration: 30 Minutes
                 </div>
               </div>
               <CardContent className="p-8 space-y-8 bg-white">
                 <div className="space-y-6">
                   {[
                     { q: "What is 12 × 8?", options: ["84", "96", "102", "78"] },
                     { q: "Solve for x: 5x + 10 = 20", options: ["x = 2", "x = 5", "x = 4", "x = 10"] },
                     { q: "Find the square root of 144", options: ["10", "14", "12", "16"] }
                   ].map((item, idx) => (
                     <div key={idx} className="space-y-4 border-b border-border pb-6 last:border-0 last:pb-0">
                       <p className="font-semibold text-lg text-secondary flex items-start gap-3">
                         <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-secondary flex items-center justify-center text-sm font-bold">{idx + 1}</span>
                         {item.q}
                       </p>
                       <div className="grid grid-cols-2 gap-3 pl-11">
                         {item.options.map((opt, oIdx) => (
                           <div key={oIdx} className="p-3 border rounded-xl hover:border-primary cursor-pointer transition-colors text-sm font-medium text-muted-foreground flex items-center gap-2">
                             <div className="w-4 h-4 rounded-full border border-border" />
                             {opt}
                           </div>
                         ))}
                       </div>
                     </div>
                   ))}
                 </div>
                 <Button className="w-full h-12 rounded-xl bg-secondary text-white hover:bg-secondary/90 font-bold shadow-md">
                   Submit Exam
                 </Button>
               </CardContent>
             </Card>
          </div>
        </section>
      </main>

      <footer className="bg-secondary py-12 px-6 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-secondary">EX</div>
            <span className="text-xl font-headline font-bold tracking-tight">Exam Center</span>
          </div>
          <nav className="flex gap-8 text-sm font-medium opacity-80">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <button onClick={() => setIsLoginOpen(true)} className="hover:text-primary transition-colors">Login</button>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <p className="text-xs opacity-60">© {new Date().getFullYear()} EX Exam Center. All rights reserved.</p>
        </div>
      </footer>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  )
}
