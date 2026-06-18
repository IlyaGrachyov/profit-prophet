import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "./AppRoutes.tsx";

type HelmetTag = { toString(): string };
type HelmetCtx = { helmet?: { title?: HelmetTag; meta?: HelmetTag; link?: HelmetTag } };

// Server entry used only at build time by prerender.mjs. Renders a route to a
// static HTML string plus the <head> tags collected by react-helmet-async.
export function render(url: string): { html: string; head: string } {
  const helmetContext: HelmetCtx = {};
  const queryClient = new QueryClient();

  const html = renderToString(
    <HelmetProvider context={helmetContext as Record<string, unknown>}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>,
  );

  const { helmet } = helmetContext;
  const head = [
    helmet?.title?.toString() ?? "",
    helmet?.meta?.toString() ?? "",
    helmet?.link?.toString() ?? "",
  ]
    .filter(Boolean)
    .join("\n    ");

  return { html, head };
}
