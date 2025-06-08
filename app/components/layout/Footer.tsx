export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/rqf-logo-icon.png" 
                alt="RealQuick Funds" 
                className="h-8 w-8"
              />
              <img 
                src="/rqf-Logo-dark.png" 
                alt="RealQuick Funds" 
                className="h-6"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Fast, reliable funding solutions for your business needs. 
              Get qualified in minutes, not days.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={`${process.env.MAIN_WEBSITE_URL || "https://realquickfunds.com"}/about`}
                  className="text-gray-300 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href={`${process.env.MAIN_WEBSITE_URL || "https://realquickfunds.com"}/services`}
                  className="text-gray-300 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href={`${process.env.MAIN_WEBSITE_URL || "https://realquickfunds.com"}/contact`}
                  className="text-gray-300 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={`${process.env.MAIN_WEBSITE_URL || "https://realquickfunds.com"}/privacy`}
                  className="text-gray-300 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href={`${process.env.MAIN_WEBSITE_URL || "https://realquickfunds.com"}/terms`}
                  className="text-gray-300 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} RealQuick Funds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}