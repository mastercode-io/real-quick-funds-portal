import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import "./styles/global.css";
import "./styles/layout.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Poppins:wght@300;400;500;600;700&display=swap",
  },
  {
    rel: "icon",
    href: "/rqf-logo-icon.png",
    type: "image/png",
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  return json({
    ENV: {
      MAIN_WEBSITE_URL: process.env.MAIN_WEBSITE_URL || "https://realquickfunds.com",
    },
  });
}

const headerStyle = {
  position: 'fixed' as const,
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: '#444444',
  padding: '10px 0',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '70px',
};

const footerStyle = {
  position: 'fixed' as const,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#444444',
  color: 'white',
  padding: '10px 0',
  zIndex: 1000,
  height: '70px',
};

const footerContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  height: '100%',
};

const logoStyle = {
  height: 'auto',
  width: '120px',
};

const contentWrapperStyle = {
  paddingTop: '90px',  
  paddingBottom: '90px', 
  minHeight: 'calc(100vh - 140px)', 
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box' as const,
};

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header style={headerStyle}>
        <a href="/">
          <img 
            src="/rqf-Logo-dark.png" 
            alt="RealQuick Funds"
            style={logoStyle}
          />
        </a>
      </header>
      
      <main style={contentWrapperStyle}>
        {children}
      </main>
      
      <footer style={footerStyle}>
        <div style={footerContainerStyle}>
          <div>
            <img 
              src="/rqf-Logo-dark.png" 
              alt="RealQuick Funds"
              style={logoStyle}
            />
          </div>
          <div style={{ color: '#cccccc', fontSize: '14px' }}>
            Copyright {new Date().getFullYear()} Real Quick Funds, LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  const { ENV } = useLoaderData<typeof loader>();
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: 'Poppins, sans-serif' }}>
        <AppLayout>
          <Outlet />
        </AppLayout>
        <ScrollRestoration />
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
      </body>
    </html>
  );
}