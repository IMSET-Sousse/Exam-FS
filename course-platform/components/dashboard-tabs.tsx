"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StudentDashboard } from "@/components/student-dashboard"
import { TeacherDashboard } from "@/components/teacher-dashboard"

export function DashboardTabs() {
  // In a real app, this would be determined by the user's role from authentication
  const [userRole, setUserRole] = useState<"student" | "teacher">("student")

  return (
    <Tabs defaultValue={userRole} onValueChange={(value) => setUserRole(value as "student" | "teacher")}>
      <TabsList className="grid w-full max-w-md grid-cols-2">
        <TabsTrigger value="student">Student View</TabsTrigger>
        <TabsTrigger value="teacher">Teacher View</TabsTrigger>
      </TabsList>
      <TabsContent value="student" className="mt-6">
        <StudentDashboard />
      </TabsContent>
      <TabsContent value="teacher" className="mt-6">
        <TeacherDashboard />
      </TabsContent>
    </Tabs>
  )
}
