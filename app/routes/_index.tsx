import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "RealQuick Funds Portal" },
    { name: "description", content: "RealQuick Funds client portal" },
  ];
};

export default function Index() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: 'calc(100vh - 180px)',
      padding: '0 20px'
    }}>
      <Link 
        to="/emd" 
        className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors text-lg"
      >
        EMD Request
      </Link>
    </div>
  );
}