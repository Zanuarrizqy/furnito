import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider} from "@/components/ui/sidebar"

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar userRole="seller"/>
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}