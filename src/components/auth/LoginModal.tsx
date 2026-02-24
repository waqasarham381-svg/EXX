"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GraduationCap, BookOpen, ShieldCheck, ArrowLeft } from "lucide-react"

type UserType = "student" | "teacher" | "admin" | null

export function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [userType, setUserType] = React.useState<UserType>(null)
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState("")
  const router = useRouter()

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "Arham" && password === "EX") {
      onClose()
      router.push("/dashboard")
    } else {
      setError("Invalid credentials. Try Arham/EX")
    }
  }

  const reset = () => {
    setUserType(null)
    setUsername("")
    setPassword("")
    setError("")
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-secondary">
            {userType ? `${userType.charAt(0).toUpperCase() + userType.slice(1)} Login` : "Welcome to EX"}
          </DialogTitle>
          <DialogDescription>
            {userType ? "Please enter your credentials below." : "Choose your role to continue."}
          </DialogDescription>
        </DialogHeader>

        {!userType ? (
          <div className="grid gap-4 py-4">
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:border-primary transition-all rounded-xl"
              onClick={() => setUserType("student")}
            >
              <GraduationCap className="h-6 w-6 text-secondary" />
              <span>Student</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:border-primary transition-all rounded-xl"
              onClick={() => setUserType("teacher")}
            >
              <BookOpen className="h-6 w-6 text-secondary" />
              <span>Teacher</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:border-primary transition-all rounded-xl"
              onClick={() => setUserType("admin")}
            >
              <ShieldCheck className="h-6 w-6 text-secondary" />
              <span>Admin</span>
            </Button>
          </div>
        ) : (
          <form onSubmit={userType === "admin" ? handleAdminLogin : (e) => e.preventDefault()} className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username or ID</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={userType === "admin" ? "Arham" : "Enter your ID"}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={userType === "admin" ? "EX" : "••••••••"}
                required
              />
            </div>
            {error && <p className="text-destructive text-xs font-medium">{error}</p>}
            <div className="flex gap-3 pt-2">
              <Button type="button" variant="ghost" onClick={() => setUserType(null)} className="flex-1">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back
              </Button>
              <Button type="submit" className="flex-[2] bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-md">
                Login
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
