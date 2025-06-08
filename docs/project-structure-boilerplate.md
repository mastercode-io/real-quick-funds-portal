# RealQuick Funds Portal - Project Structure & Boilerplate

## Project Structure

```
realquick-portal/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── forms/
│   │   │   ├── EMDForm/
│   │   │   │   ├── Step1BorrowerInfo.tsx
│   │   │   │   ├── Step2DealInfo.tsx
│   │   │   │   ├── StepIndicator.tsx
│   │   │   │   └── FormContext.tsx
│   │   │   └── shared/
│   │   │       ├── FormInput.tsx
│   │   │       ├── FormSelect.tsx
│   │   │       ├── FileUpload.tsx
│   │   │       └── DatePicker.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Alert.tsx
│   ├── routes/
│   │   ├── _index.tsx
│   │   ├── emd.tsx
│   │   ├── emd.step1.tsx
│   │   ├── emd.step2.tsx
│   │   └── emd.success.tsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── components.css
│   │   └── tailwind.css
│   ├── lib/
│   │   ├── zoho.server.ts
│   │   ├── validations.ts
│   │   ├── constants.ts
│   │   └── utils.ts
│   ├── hooks/
│   │   ├── useFormPersistence.ts
│   │   └── useStepNavigation.ts
│   ├── types/
│   │   ├── forms.ts
│   │   └── api.ts
│   ├── entry.client.tsx
│   ├── entry.server.tsx
│   └── root.tsx
├── public/
│   ├── images/
│   │   └── logo.svg
│   └── fonts/
├── .env.example
├── .gitignore
├── package.json
├── remix.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Key File Boilerplates

### `package.json`
```json
{
  "name": "realquick-portal",
  "private": true,
  "scripts": {
    "build": "remix build",
    "dev": "remix dev",
    "start": "remix-serve build",
    "typecheck": "tsc",
    "lint": "eslint --cache --cache-location ./node_modules/.cache/eslint .",
    "format": "prettier --write ."
  },
  "dependencies": {
    "@remix-run/node": "^2.4.0",
    "@remix-run/react": "^2.4.0",
    "@remix-run/serve": "^2.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "zod": "^3.22.0",
    "date-fns": "^2.30.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "@remix-run/dev": "^2.4.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.3.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "eslint": "^8.55.0",
    "prettier": "^3.1.0"
  }
}
```

### `app/root.tsx`
```tsx
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { Layout } from "~/components/layout/Layout";
import styles from "~/styles/global.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "icon", type: "image/svg+xml", href: "/images/logo.svg" },
];

export async function loader({ request }: LoaderFunctionArgs) {
  return json({
    ENV: {
      NODE_ENV: process.env.NODE_ENV,
      MAIN_WEBSITE_URL: process.env.MAIN_WEBSITE_URL,
    },
  });
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
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
        <LiveReload />
      </body>
    </html>
  );
}
```

### `app/routes/emd.tsx`
```tsx
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData, useNavigation, useSearchParams } from "@remix-run/react";
import { z } from "zod";
import { StepIndicator } from "~/components/forms/EMDForm/StepIndicator";
import { Step1BorrowerInfo } from "~/components/forms/EMDForm/Step1BorrowerInfo";
import { Step2DealInfo } from "~/components/forms/EMDForm/Step2DealInfo";
import { submitToZoho } from "~/lib/zoho.server";
import { emdFormSchema } from "~/lib/validations";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const step = url.searchParams.get("step") || "1";
  
  return json({ currentStep: parseInt(step) });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const step = formData.get("step");

  // For step navigation
  if (formData.get("_action") === "navigate") {
    return redirect(`/emd?step=${step}`);
  }

  // Final submission
  if (formData.get("_action") === "submit") {
    try {
      const data = Object.fromEntries(formData);
      const validated = emdFormSchema.parse(data);
      
      await submitToZoho(validated);
      
      return redirect("/emd/success");
    } catch (error) {
      return json(
        { error: "Invalid form data" },
        { status: 400 }
      );
    }
  }

  return null;
}

export default function EMDForm() {
  const { currentStep } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-8">EMD Request Form</h1>
        <StepIndicator currentStep={currentStep} />
      </div>

      <Form method="post" className="space-y-6">
        {currentStep === 1 && <Step1BorrowerInfo />}
        {currentStep === 2 && <Step2DealInfo />}

        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <button
              type="submit"
              name="_action"
              value="navigate"
              formAction={`/emd?step=${currentStep - 1}`}
              className="btn-secondary"
            >
              Previous
            </button>
          )}

          {currentStep < 2 ? (
            <button
              type="submit"
              name="_action"
              value="navigate"
              formAction={`/emd?step=${currentStep + 1}`}
              className="btn-primary ml-auto"
            >
              Next →
            </button>
          ) : (
            <button
              type="submit"
              name="_action"
              value="submit"
              disabled={isSubmitting}
              className="btn-primary ml-auto"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>
      </Form>
    </div>
  );
}
```

### `app/lib/zoho.server.ts`
```typescript
import { z } from "zod";
import type { EMDFormData } from "~/types/forms";

const ZOHO_API_URL = process.env.ZOHO_API_URL!;
const ZOHO_ACCESS_TOKEN = process.env.ZOHO_ACCESS_TOKEN!;

export async function submitToZoho(data: EMDFormData) {
  const zohoPayload = {
    data: [
      {
        First_Name: data.borrowerFirstName,
        Last_Name: data.borrowerLastName,
        Email: data.email,
        Phone: data.phone,
        Company: data.borrowerEntity || "",
        Requested_Amount: data.requestedAmount,
        Funds_Required_Date: data.fundsRequiredDate,
        Property_Address: `${data.address}, ${data.city}, ${data.state} ${data.zipCode}`,
        Inspection_End_Date: data.inspectionEndDate,
        Escrow_Close_Date: data.escrowCloseDate,
        Has_Different_Broker: data.hasDifferentBroker || false,
      },
    ],
  };

  const response = await fetch(`${ZOHO_API_URL}/Leads`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${ZOHO_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(zohoPayload),
  });

  if (!response.ok) {
    throw new Error(`Zoho API error: ${response.statusText}`);
  }

  const result = await response.json();
  
  // Handle file uploads separately if needed
  // This would involve uploading to Zoho's file API
  
  return result;
}
```

### `.env.example`
```env
# Environment
NODE_ENV=development

# URLs
MAIN_WEBSITE_URL=https://realquickfunds.com

# Zoho CRM
ZOHO_API_URL=https://www.zohoapis.com/crm/v2
ZOHO_ACCESS_TOKEN=your_access_token_here
ZOHO_REFRESH_TOKEN=your_refresh_token_here
ZOHO_CLIENT_ID=your_client_id_here
ZOHO_CLIENT_SECRET=your_client_secret_here

# File Upload
MAX_FILE_SIZE=10485760  # 10MB in bytes
ALLOWED_FILE_TYPES=pdf,doc,docx,jpg,jpeg,png
```

### `tailwind.config.ts`
```typescript
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F39C12",
          hover: "#E67E22",
          dark: "#2C3E50",
        },
        gray: {
          light: "#F8F9FA",
          border: "#E0E0E0",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      borderRadius: {
        button: "30px",
      },
    },
  },
  plugins: [],
} satisfies Config;
```

## Getting Started

1. **Clone and Install**
   ```bash
   git clone <repository>
   cd realquick-portal
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env with your Zoho API credentials
   ```

3. **Development**
   ```bash
   npm run dev
   # Visit http://localhost:3000
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Deployment to Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build Configuration** (`netlify.toml`)
   ```toml
   [build]
     command = "npm run build"
     publish = "public"

   [[redirects]]
     from = "/api/*"
     to = "/.netlify/functions/:splat"
     status = 200

   [[headers]]
     for = "/build/*"
     [headers.values]
       "Cache-Control" = "public, max-age=31536000, immutable"
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

## Form State Management

The form uses Remix's built-in form handling with progressive enhancement:
- No JavaScript required for basic functionality
- Form data persists during navigation via session storage
- Validation happens on both client and server
- File uploads are handled via multipart form data

## Next Steps

1. Set up Zoho CRM OAuth flow for token management
2. Implement file upload to Zoho attachments
3. Add comprehensive error handling
4. Set up monitoring and analytics
5. Implement rate limiting for form submissions