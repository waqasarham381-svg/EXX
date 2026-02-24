"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { 
  Users, 
  FileText, 
  Settings, 
  Bell, 
  LogOut, 
  Search, 
  Plus, 
  MoreVertical, 
  CheckCircle, 
  XCircle,
  LayoutDashboard
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function AdminDashboard() {
  const router = useRouter()
  const [teacherName, setTeacherName] = React.useState("")
  const [assignedPassword, setAssignedPassword] = React.useState("")

  const stats = [
    { label: "Total Tests Listed", value: "1,248", icon: <FileText className="h-4 w-4" />, trend: "+12%" },
    { label: "Active Teachers", value: "42", icon: <Users className="h-4 w-4" />, trend: "+2" },
    { label: "Pending Approvals", value: "7", icon: <Bell className="h-4 w-4" />, trend: "-3" },
  ]

  const teacherRequests = [
    { id: 1, name: "Dr. Sarah Johnson", department: "Physics", date: "2 mins ago" },
    { id: 2, name: "Prof. Michael Chen", department: "Engineering", date: "1 hour ago" },
    { id: 3, name: "Jane Smith", department: "Mathematics", date: "Yesterday" }
  ]

  const handleLogout = () => {
    router.push("/")
  }

  const handleAssignPassword = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock logic
    alert(`Password assigned to ${teacherName}`)
    setTeacherName("")
    setAssignedPassword("")
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-border hidden lg:flex flex-col sticky top-0 h-screen">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-secondary shadow-sm">EX</div>
          <span className="text-xl font-headline font-bold text-secondary tracking-tight">Exam Center</span>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 py-4">
          <Button variant="secondary" className="w-full justify-start gap-3 h-11 bg-primary/10 text-secondary hover:bg-primary/20">
            <LayoutDashboard className="h-4 w-4" /> Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 h-11 text-muted-foreground hover:text-secondary">
            <Users className="h-4 w-4" /> Teachers
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 h-11 text-muted-foreground hover:text-secondary">
            <FileText className="h-4 w-4" /> Exam Management
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 h-11 text-muted-foreground hover:text-secondary">
            <Settings className="h-4 w-4" /> Settings
          </Button>
        </nav>

        <div className="p-4 border-t">
          <Button variant="ghost" onClick={handleLogout} className="w-full justify-start gap-3 h-11 text-destructive hover:bg-destructive/10">
            <LogOut className="h-4 w-4" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-8">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-headline font-bold text-secondary">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Arham.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search records..." className="pl-10 w-64 bg-white border-border" />
            </div>
            <Avatar className="h-10 w-10 border-2 border-primary">
              <AvatarImage src="https://picsum.photos/seed/admin/100" />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <Card key={i} className="border-none shadow-sm bg-white overflow-hidden group">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
                  <h3 className="text-3xl font-bold text-secondary">{stat.value}</h3>
                  <p className="text-xs text-secondary font-semibold mt-2 flex items-center gap-1">
                    <span className="text-secondary">{stat.trend}</span> from last month
                  </p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center text-secondary group-hover:bg-primary transition-colors">
                  {stat.icon}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Teacher Requests Panel */}
          <Card className="lg:col-span-2 border-none shadow-sm bg-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold text-secondary">Teacher Requests</CardTitle>
                <CardDescription>Review and approve new teacher registrations.</CardDescription>
              </div>
              <Button variant="link" className="text-secondary font-bold">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {teacherRequests.map((req) => (
                  <div key={req.id} className="flex items-center justify-between p-4 bg-background rounded-2xl hover:shadow-md transition-all">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 shadow-sm">
                        <AvatarImage src={`https://picsum.photos/seed/${req.id}/100`} />
                        <AvatarFallback>{req.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-secondary">{req.name}</p>
                        <p className="text-sm text-muted-foreground">{req.department} • {req.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost" className="text-destructive hover:bg-destructive/10 rounded-full">
                        <XCircle className="h-5 w-5" />
                      </Button>
                      <Button size="icon" variant="ghost" className="text-secondary hover:bg-primary/20 rounded-full">
                        <CheckCircle className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Password Allocation Section */}
          <Card className="border-none shadow-sm bg-white border-t-4 border-t-primary">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-secondary">Password Allocation</CardTitle>
              <CardDescription>Assign or reset teacher passwords.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAssignPassword} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-secondary">Teacher Name / ID</label>
                  <Input 
                    placeholder="e.g. T-102 or Sarah Johnson" 
                    value={teacherName}
                    onChange={(e) => setTeacherName(e.target.value)}
                    className="bg-background border-border"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-secondary">Assign Password</label>
                  <Input 
                    type="password" 
                    placeholder="••••••••" 
                    value={assignedPassword}
                    onChange={(e) => setAssignedPassword(e.target.value)}
                    className="bg-background border-border"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-11 rounded-xl shadow-sm">
                  Assign Password
                </Button>
                <p className="text-[10px] text-center text-muted-foreground px-4">
                  Note: The teacher will be notified immediately of this password update via their registered email.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
