import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const nodeEnv = process.env.NODE_ENV;
  const mainWebsiteUrl = process.env.MAIN_WEBSITE_URL || "https://realquickfunds.com";
  
  if (nodeEnv === "production") {
    return redirect(mainWebsiteUrl);
  }
  
  return redirect("/emd");
};

export default function Index() {
  return null;
}