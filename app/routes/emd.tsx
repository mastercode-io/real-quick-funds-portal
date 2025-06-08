import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "EMD Request - RealQuick Funds" },
    { name: "description", content: "Earnest Money Deposit request form for RealQuick Funds clients" },
  ];
};

export default function EMD() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 mb-20">
      {/* EMD form will be added here in the next phase */}
    </div>
  );
}