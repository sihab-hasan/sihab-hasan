import type { ReactNode } from "react";
import Background from "@/components/backgrounds/background";

const OverviewLayout = ({ children }: { children: ReactNode }) => (
  <main className="flex min-h-dvh w-full overflow-x-hidden bg-sidebar-border">
    <a
      href="#main-content"
      className="sr-only z-50 bg-card px-3 py-2 text-card-foreground focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:outline-none focus:ring-2 focus:ring-ring"
    >
      Skip to content
    </a>
    <section
      id="main-content"
      tabIndex={-1}
      className="relative isolate flex min-w-0 flex-1 bg-background shadow-inner"
    >
      <Background />
      <div className="relative z-10 mx-auto flex min-h-full w-full max-w-7xl flex-1 flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        {children}
      </div>
    </section>
  </main>
);

export default OverviewLayout;
