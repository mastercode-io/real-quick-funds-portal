import { Link } from "@remix-run/react";

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/rqf-logo-icon.png" 
                alt="RealQuick Funds" 
                className="h-8 w-8"
              />
              <img 
                src="/rqf-logo-light.png" 
                alt="RealQuick Funds" 
                className="h-6"
              />
            </Link>
          </div>
          
          <nav className="flex items-center space-x-8">
            <Link 
              to="/emd" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              EMD Portal
            </Link>
            <a 
              href={process.env.MAIN_WEBSITE_URL || "https://realquickfunds.com"}
              className="text-gray-700 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Main Website
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}