import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ThemeProvider } from "./components/theme-provider";
import { TokenControl } from "./components/token-control";
import { ModeToggle } from "./components/mode-toggle";
import { BuilderProvider } from "./components/builder-provider";
import { BuilderCanvas } from "./components/builder-canvas";

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BuilderProvider>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
              <SidebarTrigger className="-ml-1" />
              <div className="flex-1" />
              <ModeToggle />
              <TokenControl />
            </header>
            <BuilderCanvas />
          </SidebarInset>
        </SidebarProvider>
      </BuilderProvider>
    </ThemeProvider>
  );
}

export default App;
