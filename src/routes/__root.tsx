import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rayyan Mehmood — AI SaaS Developer & UI/UX Specialist" },
      { name: "description", content: "Rayyan Mehmood — Software engineer and UI/UX specialist building premium AI SaaS, custom web apps and automation systems for ambitious founders." },
      { name: "author", content: "Rayyan Mehmood" },
      { property: "og:title", content: "Rayyan Mehmood — AI SaaS Developer & UI/UX Specialist" },
      { property: "og:description", content: "Rayyan Mehmood — Software engineer and UI/UX specialist building premium AI SaaS, custom web apps and automation systems for ambitious founders." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rayyan Mehmood — AI SaaS Developer & UI/UX Specialist" },
      { name: "twitter:description", content: "Rayyan Mehmood — Software engineer and UI/UX specialist building premium AI SaaS, custom web apps and automation systems for ambitious founders." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/75108c11-6d25-46b8-a0fe-7c0b9e4c898a/id-preview-2f62038c--5b56bb4a-63d2-4b98-83e3-cb94427b79c1.lovable.app-1778241671999.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/75108c11-6d25-46b8-a0fe-7c0b9e4c898a/id-preview-2f62038c--5b56bb4a-63d2-4b98-83e3-cb94427b79c1.lovable.app-1778241671999.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
