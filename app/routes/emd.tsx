import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/layout/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "EMD Portal - RealQuick Funds" },
    { name: "description", content: "Earnest Money Deposit portal for RealQuick Funds clients" },
  ];
};

export default function EMD() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Earnest Money Deposit Portal
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Submit your earnest money deposit information quickly and securely. 
            Our streamlined process ensures your transaction moves forward without delay.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-primary-dark mb-2">
              Coming Soon
            </h2>
            <p className="text-gray-700">
              The EMD form is currently under development. This secure portal will allow you to:
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Upload required documents securely
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Submit earnest money deposit information
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Track your submission status
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Receive instant confirmation
              </li>
            </ul>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Need immediate assistance? Contact our team directly.
            </p>
            <a 
              href={`${process.env.MAIN_WEBSITE_URL || "https://realquickfunds.com"}/contact`}
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}