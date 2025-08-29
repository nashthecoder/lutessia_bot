import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TrendingUp } from "lucide-react";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {/* Mobile Header - Always visible on mobile */}
        <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-background border-b border-border flex items-center px-4 md:hidden">
          <SidebarTrigger className="mr-3" />
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold">TradeBot</span>
          </div>
        </header>
        
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-6 pt-20 md:pt-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;