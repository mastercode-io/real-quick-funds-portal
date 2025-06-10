var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx
var entry_server_react_stream_exports = {};
__export(entry_server_react_stream_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx",
          lineNumber: 91,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_react2 = require("@remix-run/react"), import_node2 = require("@remix-run/node");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-GUUNWHZN.css";

// app/styles/global.css
var global_default = "/build/_assets/global-5DZMZNFH.css";

// app/styles/layout.css
var layout_default = "/build/_assets/layout-FFKQUJV4.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: layout_default },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Poppins:wght@300;400;500;600;700&display=swap"
  },
  {
    rel: "icon",
    href: "/rqf-logo-icon.png",
    type: "image/png"
  }
];
async function loader({ request }) {
  return (0, import_node2.json)({
    ENV: {
      MAIN_WEBSITE_URL: process.env.MAIN_WEBSITE_URL || "https://realquickfunds.com"
    }
  });
}
var headerStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: "#444444",
  padding: "0",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  zIndex: 1e3,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "70px"
}, footerStyle = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "#444444",
  color: "white",
  padding: "0",
  zIndex: 1e3,
  height: "70px"
}, footerContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px",
  height: "100%"
}, logoStyle = {
  height: "auto",
  width: "100px",
  margin: "15px 0"
}, contentWrapperStyle = {
  paddingTop: "70px",
  paddingBottom: "70px",
  minHeight: "calc(100vh - 140px)",
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
  backgroundColor: "#f9fafb"
};
function AppLayout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { style: headerStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        src: "/rqf-Logo-dark.png",
        alt: "RealQuick Funds",
        style: logoStyle
      },
      void 0,
      !1,
      {
        fileName: "app/root.tsx",
        lineNumber: 105,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { style: contentWrapperStyle, children }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { style: footerStyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: footerContainerStyle, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "img",
        {
          src: "/rqf-Logo-dark.png",
          alt: "RealQuick Funds",
          style: logoStyle
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 120,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { color: "#cccccc", fontSize: "14px" }, children: [
        "Copyright ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Real Quick Funds, LLC. All rights reserved."
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 126,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 118,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 102,
    columnNumber: 5
  }, this);
}
function App() {
  let { ENV } = (0, import_react2.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 143,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 144,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { style: { margin: 0, padding: 0, fontFamily: "Poppins, sans-serif" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AppLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 148,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 150,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `window.ENV = ${JSON.stringify(ENV)}`
          }
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 152,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 146,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 139,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "RealQuick Funds Portal" },
  { name: "description", content: "RealQuick Funds client portal" }
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 180px)",
    padding: "0 20px"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_react3.Link,
    {
      to: "/emd",
      className: "inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors text-lg",
      children: "EMD Request"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 20,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/emd.tsx
var emd_exports = {};
__export(emd_exports, {
  default: () => EMDRoute,
  meta: () => meta2
});
var import_react9 = __toESM(require("react"));

// app/components/forms/EMDForm/Step1BorrowerInfo.tsx
var import_react5 = __toESM(require("react")), import_react_hook_form = require("react-hook-form");

// app/components/ui/FormInput.tsx
var import_react4 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), FormInput = (0, import_react4.forwardRef)(
  ({ className = "", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "input",
    {
      ref,
      className: `w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-800 
          placeholder:text-gray-400 bg-white transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          hover:border-gray-400 ${className}`,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/FormInput.tsx",
      lineNumber: 10,
      columnNumber: 7
    },
    this
  )
);
FormInput.displayName = "FormInput";
var FormInput_default = FormInput;

// app/components/forms/EMDForm/Step1BorrowerInfo.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), Step1BorrowerInfo = ({ onNext, formData }) => {
  let { register, handleSubmit, formState: { errors }, setValue, watch } = (0, import_react_hook_form.useForm)({
    defaultValues: formData || {}
  }), onSubmit = (data) => {
    data.phone && (data.phone = data.phone.replace(/\D/g, "")), onNext == null || onNext(data);
  }, formatPhoneNumber = (value) => {
    let cleaned = value.replace(/\D/g, "");
    return cleaned.length === 0 ? "" : cleaned.length <= 3 ? `(${cleaned}` : cleaned.length <= 6 ? `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}` : `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  }, handlePhoneChange = (e) => {
    let formatted = formatPhoneNumber(e.target.value);
    setValue("phone", formatted);
  };
  return import_react5.default.useEffect(() => {
    let currentPhone = watch("phone");
    currentPhone && /^\d+$/.test(currentPhone) && setValue("phone", formatPhoneNumber(currentPhone));
  }, [watch, setValue]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "step", value: "1" }, void 0, !1, {
      fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "firstName", className: "block text-xs font-medium text-gray-700 mb-1", children: [
          "Borrower First Name ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, !1, {
            fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
            lineNumber: 60,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          FormInput_default,
          {
            id: "firstName",
            ...register("firstName", { required: "First name is required" }),
            placeholder: "Enter first name",
            "aria-invalid": !!errors.firstName
          },
          void 0,
          !1,
          {
            fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
            lineNumber: 62,
            columnNumber: 11
          },
          this
        ),
        errors.firstName && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-red-600 text-xs mt-1", role: "alert", children: typeof errors.firstName.message == "string" ? errors.firstName.message : "First name is required" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "lastName", className: "block text-xs font-medium text-gray-700 mb-1", children: [
          "Borrower Last Name ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, !1, {
            fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
            lineNumber: 77,
            columnNumber: 32
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          FormInput_default,
          {
            id: "lastName",
            ...register("lastName", { required: "Last name is required" }),
            placeholder: "Enter last name",
            "aria-invalid": !!errors.lastName
          },
          void 0,
          !1,
          {
            fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
            lineNumber: 79,
            columnNumber: 11
          },
          this
        ),
        errors.lastName && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-red-600 text-xs mt-1", role: "alert", children: typeof errors.lastName.message == "string" ? errors.lastName.message : "Last name is required" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "email", className: "block text-xs font-medium text-gray-700 mb-1", children: [
          "Email ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, !1, {
            fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
            lineNumber: 96,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          FormInput_default,
          {
            id: "email",
            type: "email",
            ...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Enter a valid email address"
              }
            }),
            placeholder: "Enter email address",
            "aria-invalid": !!errors.email
          },
          void 0,
          !1,
          {
            fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
            lineNumber: 98,
            columnNumber: 11
          },
          this
        ),
        errors.email && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-red-600 text-xs mt-1", role: "alert", children: typeof errors.email.message == "string" ? errors.email.message : "Enter a valid email" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
          lineNumber: 112,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "phone", className: "block text-xs font-medium text-gray-700 mb-1", children: [
          "Phone Number ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, !1, {
            fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
            lineNumber: 120,
            columnNumber: 26
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          FormInput_default,
          {
            id: "phone",
            type: "tel",
            ...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^\(\d{3}\) \d{3}-\d{4}$/,
                message: "Format: (555) 123-4567"
              }
            }),
            placeholder: "(555) 123-4567",
            onChange: handlePhoneChange,
            "aria-invalid": !!errors.phone
          },
          void 0,
          !1,
          {
            fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
            lineNumber: 122,
            columnNumber: 11
          },
          this
        ),
        errors.phone && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-red-600 text-xs mt-1", role: "alert", children: typeof errors.phone.message == "string" ? errors.phone.message : "Enter a valid phone number" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
          lineNumber: 137,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "company", className: "block text-xs font-medium text-gray-700 mb-1", children: "Borrower Entity (Company) Name" }, void 0, !1, {
        fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
        lineNumber: 145,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        FormInput_default,
        {
          id: "company",
          ...register("company"),
          placeholder: "Enter company name (optional)",
          "aria-invalid": !!errors.company
        },
        void 0,
        !1,
        {
          fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
          lineNumber: 148,
          columnNumber: 9
        },
        this
      ),
      errors.company && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-red-600 text-xs mt-1", role: "alert", children: typeof errors.company.message == "string" ? errors.company.message : "This field has an error" }, void 0, !1, {
        fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
        lineNumber: 155,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-start space-x-2 p-3 bg-gray-50 rounded-md border border-gray-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "input",
        {
          id: "hasDifferentBroker",
          type: "checkbox",
          ...register("hasDifferentBroker"),
          className: "w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-1 mt-0.5"
        },
        void 0,
        !1,
        {
          fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
          lineNumber: 162,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "hasDifferentBroker", className: "block text-xs text-gray-700 font-medium leading-relaxed", children: "A different individual is referring or brokering this deal" }, void 0, !1, {
        fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
      lineNumber: 161,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "pt-4 flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "md:w-auto bg-primary hover:bg-primary-hover text-white font-medium py-2.5 px-6 rounded-md transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg text-sm",
        children: [
          "Next ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "ml-1", children: "\u2192" }, void 0, !1, {
            fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
            lineNumber: 178,
            columnNumber: 16
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
        lineNumber: 174,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
      lineNumber: 173,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/forms/EMDForm/Step1BorrowerInfo.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}, Step1BorrowerInfo_default = Step1BorrowerInfo;

// app/components/forms/EMDForm/Step2DealInfo.tsx
var import_react7 = require("react"), import_react_hook_form2 = require("react-hook-form");

// app/components/ui/FormSelect.tsx
var import_react6 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), FormSelect = (0, import_react6.forwardRef)(
  ({ options, className = "", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "select",
    {
      ref,
      className: `w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-800
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          hover:border-gray-400 ${className}`,
      ...props,
      children: options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: option.value, children: option.label }, option.value, !1, {
        fileName: "app/components/ui/FormSelect.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this))
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/FormSelect.tsx",
      lineNumber: 16,
      columnNumber: 7
    },
    this
  )
);
FormSelect.displayName = "FormSelect";
var FormSelect_default = FormSelect;

// app/components/forms/EMDForm/Step2DealInfo.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), FileUpload = ({
  label,
  sublabel,
  required = !1,
  accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png",
  onFileChange,
  error,
  showError = !1
}) => {
  let [selectedFile, setSelectedFile] = (0, import_react7.useState)(null), [isDragOver, setIsDragOver] = (0, import_react7.useState)(!1), handleFileSelect = (file) => {
    setSelectedFile(file), onFileChange == null || onFileChange(file);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { className: "block text-xs font-medium text-gray-700 mb-1", children: [
      label,
      " ",
      required && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, !1, {
        fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
        lineNumber: 70,
        columnNumber: 30
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    sublabel && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-xs text-gray-500 mb-2", children: sublabel }, void 0, !1, {
      fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "div",
      {
        className: `border-2 border-dashed rounded-md p-6 text-center transition-colors ${isDragOver ? "border-primary bg-primary/5" : error && showError ? "border-red-300 bg-red-50" : "border-gray-300 hover:border-gray-400"}`,
        onDragOver: (e) => {
          e.preventDefault(), setIsDragOver(!0);
        },
        onDragLeave: (e) => {
          e.preventDefault(), setIsDragOver(!1);
        },
        onDrop: (e) => {
          e.preventDefault(), setIsDragOver(!1);
          let files = e.dataTransfer.files;
          files.length > 0 && handleFileSelect(files[0]);
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col items-center space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z" }, void 0, !1, {
              fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
              lineNumber: 89,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" }, void 0, !1, {
              fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
              lineNumber: 90,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
            lineNumber: 88,
            columnNumber: 11
          }, this),
          selectedFile ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-sm text-gray-700 font-medium", children: selectedFile.name }, void 0, !1, {
              fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
              lineNumber: 94,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-xs text-gray-500", children: [
              (selectedFile.size / 1024 / 1024).toFixed(2),
              " MB"
            ] }, void 0, !0, {
              fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
              lineNumber: 95,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "button",
              {
                type: "button",
                onClick: () => handleFileSelect(null),
                className: "text-xs text-red-600 hover:text-red-700",
                children: "Remove file"
              },
              void 0,
              !1,
              {
                fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
                lineNumber: 96,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
            lineNumber: 93,
            columnNumber: 13
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "space-y-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-sm text-gray-600", children: [
            "Drag & drop a file or ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { className: "text-primary hover:text-primary-hover cursor-pointer underline", children: [
              "browse",
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "input",
                {
                  type: "file",
                  className: "hidden",
                  accept,
                  onChange: (e) => {
                    let files = e.target.files;
                    files && files.length > 0 && handleFileSelect(files[0]);
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
                  lineNumber: 109,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
              lineNumber: 107,
              columnNumber: 39
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
            lineNumber: 106,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
          lineNumber: 87,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
        lineNumber: 75,
        columnNumber: 7
      },
      this
    ),
    error && showError && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-red-600 text-xs mt-1", role: "alert", children: error }, void 0, !1, {
      fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
      lineNumber: 122,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}, usStates = [
  { value: "", label: "Select State" },
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "DC", label: "District of Columbia" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "PR", label: "Puerto Rico" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" }
], Step2DealInfo = ({
  onNext,
  onBack,
  formData,
  updateFormData
}) => {
  let { register, handleSubmit, formState: { errors, isSubmitting }, watch, setValue } = (0, import_react_hook_form2.useForm)({
    defaultValues: formData || {}
  }), [purchaseAgreementFile, setPurchaseAgreementFile] = (0, import_react7.useState)(null), [wiringInstructionsFile, setWiringInstructionsFile] = (0, import_react7.useState)(null), endOfInspectionDate = watch("endOfInspectionDate"), closeOfEscrowDate = watch("closeOfEscrowDate"), onSubmit = (data) => {
    let formDataWithFiles = {
      ...data,
      purchaseAgreementFile,
      wiringInstructionsFile
    };
    updateFormData == null || updateFormData(formDataWithFiles), onNext == null || onNext();
  }, handleBack = () => {
    let currentData = {
      ...watch(),
      purchaseAgreementFile,
      wiringInstructionsFile
    };
    updateFormData == null || updateFormData(currentData), onBack == null || onBack();
  }, formatCurrency = (value) => {
    let numericValue = value.replace(/[^0-9.]/g, "");
    if (numericValue === "")
      return "";
    let number = parseFloat(numericValue);
    return isNaN(number) ? "" : number.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
  }, handleCurrencyChange = (e) => {
    let formatted = formatCurrency(e.target.value);
    setValue("requestedAmount", formatted);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "step", value: "2" }, void 0, !1, {
      fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
      lineNumber: 241,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "requestedAmount", className: "block text-xs font-medium text-gray-700 mb-1", children: [
          "Requested Amount ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, !1, {
            fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
            lineNumber: 248,
            columnNumber: 30
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
          lineNumber: 247,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative mt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-gray-500", children: "$" }, void 0, !1, {
            fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
            lineNumber: 252,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
            lineNumber: 251,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            FormInput_default,
            {
              id: "requestedAmount",
              ...register("requestedAmount", { required: "Requested amount is required" }),
              className: "pl-7",
              placeholder: "0.00",
              onChange: handleCurrencyChange,
              "aria-invalid": !!errors.requestedAmount
            },
            void 0,
            !1,
            {
              fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
              lineNumber: 254,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
          lineNumber: 250,
          columnNumber: 11
        }, this),
        errors.requestedAmount && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-red-600 text-xs mt-1", role: "alert", children: typeof errors.requestedAmount.message == "string" ? errors.requestedAmount.message : "Requested amount is required" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
          lineNumber: 264,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
        lineNumber: 246,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "fundsRequiredDate", className: "block text-xs font-medium text-gray-700 mb-1", children: [
          "When Funds Required ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, !1, {
            fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
            lineNumber: 273,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
          lineNumber: 272,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-xs text-gray-500 mb-1", children: "Please allow 1-2 business days for processing" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
          lineNumber: 275,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          FormInput_default,
          {
            id: "fundsRequiredDate",
            type: "date",
            ...register("fundsRequiredDate", { required: "Funds required date is required" }),
            "aria-invalid": !!errors.fundsRequiredDate
          },
          void 0,
          !1,
          {
            fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
            lineNumber: 278,
            columnNumber: 11
          },
          this
        ),
        errors.fundsRequiredDate && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-red-600 text-xs mt-1", role: "alert", children: typeof errors.fundsRequiredDate.message == "string" ? errors.fundsRequiredDate.message : "Funds required date is required" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
          lineNumber: 285,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
        lineNumber: 271,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
      lineNumber: 244,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "endOfInspectionDate", className: "block text-xs font-medium text-gray-700 mb-1", children: [
          "End of Inspection Period ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, !1, {
            fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
            lineNumber: 296,
            columnNumber: 38
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
          lineNumber: 295,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          FormInput_default,
          {
            id: "endOfInspectionDate",
            type: "date",
            ...register("endOfInspectionDate", {
              required: "End of inspection period is required"
            }),
            "aria-invalid": !!errors.endOfInspectionDate
          },
          void 0,
          !1,
          {
            fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
            lineNumber: 298,
            columnNumber: 11
          },
          this
        ),
        errors.endOfInspectionDate && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-red-600 text-xs mt-1", role: "alert", children: typeof errors.endOfInspectionDate.message == "string" ? errors.endOfInspectionDate.message : "End of inspection period is required" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
          lineNumber: 307,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
        lineNumber: 294,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "closeOfEscrowDate", className: "block text-xs font-medium text-gray-700 mb-1", children: [
          "Close of Escrow Date ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, !1, {
            fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
            lineNumber: 315,
            columnNumber: 34
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
          lineNumber: 314,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          FormInput_default,
          {
            id: "closeOfEscrowDate",
            type: "date",
            ...register("closeOfEscrowDate", {
              required: "Close of escrow date is required",
              validate: (value) => endOfInspectionDate && value && new Date(value) <= new Date(endOfInspectionDate) ? "Close of escrow date must be after end of inspection period" : !0
            }),
            "aria-invalid": !!errors.closeOfEscrowDate
          },
          void 0,
          !1,
          {
            fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
            lineNumber: 317,
            columnNumber: 11
          },
          this
        ),
        errors.closeOfEscrowDate && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-red-600 text-xs mt-1", role: "alert", children: typeof errors.closeOfEscrowDate.message == "string" ? errors.closeOfEscrowDate.message : "Close of escrow date is required" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
          lineNumber: 332,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
        lineNumber: 313,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
      lineNumber: 293,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "propertyAddress", className: "block text-xs font-medium text-gray-700 mb-1", children: [
        "Subject Property Address ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
          lineNumber: 342,
          columnNumber: 36
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
        lineNumber: 341,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { className: "w-4 h-4 text-gray-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" }, void 0, !1, {
            fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
            lineNumber: 348,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
            lineNumber: 347,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
            lineNumber: 346,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            FormInput_default,
            {
              id: "propertyAddress",
              ...register("propertyAddress", { required: "Property address is required" }),
              className: "pl-9",
              placeholder: "Enter property address",
              "aria-invalid": !!errors.propertyAddress
            },
            void 0,
            !1,
            {
              fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
              lineNumber: 351,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
          lineNumber: 345,
          columnNumber: 11
        }, this),
        errors.propertyAddress && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-red-600 text-xs mt-1", role: "alert", children: typeof errors.propertyAddress.message == "string" ? errors.propertyAddress.message : "Property address is required" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
          lineNumber: 360,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              FormInput_default,
              {
                id: "propertyCity",
                ...register("propertyCity", { required: "City is required" }),
                placeholder: "City",
                "aria-invalid": !!errors.propertyCity
              },
              void 0,
              !1,
              {
                fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
                lineNumber: 367,
                columnNumber: 15
              },
              this
            ),
            errors.propertyCity && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-red-600 text-xs mt-1", role: "alert", children: typeof errors.propertyCity.message == "string" ? errors.propertyCity.message : "City is required" }, void 0, !1, {
              fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
              lineNumber: 374,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
            lineNumber: 366,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              FormSelect_default,
              {
                id: "propertyState",
                ...register("propertyState", { required: "State is required" }),
                options: usStates,
                "aria-invalid": !!errors.propertyState
              },
              void 0,
              !1,
              {
                fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
                lineNumber: 381,
                columnNumber: 15
              },
              this
            ),
            errors.propertyState && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-red-600 text-xs mt-1", role: "alert", children: typeof errors.propertyState.message == "string" ? errors.propertyState.message : "State is required" }, void 0, !1, {
              fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
              lineNumber: 388,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
            lineNumber: 380,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              FormInput_default,
              {
                id: "propertyZip",
                ...register("propertyZip", {
                  required: "ZIP code is required",
                  pattern: {
                    value: /^\d{5}(-\d{4})?$/,
                    message: "Enter a valid ZIP code"
                  }
                }),
                placeholder: "ZIP Code",
                "aria-invalid": !!errors.propertyZip
              },
              void 0,
              !1,
              {
                fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
                lineNumber: 395,
                columnNumber: 15
              },
              this
            ),
            errors.propertyZip && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-red-600 text-xs mt-1", role: "alert", children: typeof errors.propertyZip.message == "string" ? errors.propertyZip.message : "Enter a valid ZIP code" }, void 0, !1, {
              fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
              lineNumber: 408,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
            lineNumber: 394,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
          lineNumber: 365,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
        lineNumber: 344,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
      lineNumber: 340,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      FileUpload,
      {
        label: "Purchase & Sale Agreement",
        sublabel: "Please upload the most current signed version of the purchase agreement",
        required: !0,
        accept: ".pdf,.doc,.docx",
        onFileChange: setPurchaseAgreementFile,
        error: purchaseAgreementFile ? void 0 : "Purchase agreement is required",
        showError: isSubmitting
      },
      void 0,
      !1,
      {
        fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
        lineNumber: 418,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      FileUpload,
      {
        label: "Wiring Instructions",
        sublabel: "Please upload the wiring instructions for Title / Escrow",
        required: !0,
        accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png",
        onFileChange: setWiringInstructionsFile,
        error: wiringInstructionsFile ? void 0 : "Wiring instructions are required",
        showError: isSubmitting
      },
      void 0,
      !1,
      {
        fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
        lineNumber: 429,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "p-4 bg-gray-50 rounded-md border border-gray-200 text-xs text-gray-700 leading-relaxed", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mb-3", children: "Real Quick Funds, LLC is committed to protecting and respecting your privacy, and we'll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you." }, void 0, !1, {
        fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
        lineNumber: 441,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mb-3", children: "You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy." }, void 0, !1, {
        fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
        lineNumber: 444,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "You consent to allow Real Quick Funds, LLC to store and process the personal information submitted above to provide you the content requested." }, void 0, !1, {
        fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
        lineNumber: 447,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
      lineNumber: 440,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-start space-x-2 p-3 bg-gray-50 rounded-md border border-gray-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "input",
        {
          id: "termsAgreement",
          type: "checkbox",
          ...register("termsAgreement", { required: "You must agree to the terms and conditions" }),
          className: "w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-1 mt-0.5"
        },
        void 0,
        !1,
        {
          fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
          lineNumber: 454,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { htmlFor: "termsAgreement", className: "block text-xs text-gray-700 font-medium leading-relaxed", children: [
        "I agree to the terms and conditions above ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
          lineNumber: 461,
          columnNumber: 53
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
        lineNumber: 460,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
      lineNumber: 453,
      columnNumber: 7
    }, this),
    errors.termsAgreement && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-red-600 text-xs mt-1", role: "alert", children: typeof errors.termsAgreement.message == "string" ? errors.termsAgreement.message : "You must agree to the terms and conditions" }, void 0, !1, {
      fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
      lineNumber: 465,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "pt-4 flex flex-col md:flex-row md:justify-between gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "button",
        {
          type: "button",
          onClick: handleBack,
          className: "w-full md:w-auto bg-primary hover:bg-primary-hover text-white font-medium py-2.5 px-6 rounded-md transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg text-sm",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "mr-1", children: "\u2190" }, void 0, !1, {
              fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
              lineNumber: 477,
              columnNumber: 11
            }, this),
            " Back"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
          lineNumber: 472,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "w-full md:w-auto bg-gray-900 hover:bg-black text-white font-medium py-2.5 px-6 rounded-md transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg text-sm",
          children: "Submit"
        },
        void 0,
        !1,
        {
          fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
          lineNumber: 480,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
      lineNumber: 471,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/forms/EMDForm/Step2DealInfo.tsx",
    lineNumber: 240,
    columnNumber: 5
  }, this);
}, Step2DealInfo_default = Step2DealInfo;

// app/components/forms/EMDForm/Step3Confirmation.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), Step3Confirmation = ({ formData, onReset }) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col items-center text-center space-y-6 py-4", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "bg-gray-100 rounded-full p-4 w-20 h-20 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-10 w-10 text-primary",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "path",
        {
          fillRule: "evenodd",
          d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
          clipRule: "evenodd"
        },
        void 0,
        !1,
        {
          fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
          lineNumber: 19,
          columnNumber: 11
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
      lineNumber: 13,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-2xl font-bold text-gray-800", children: "Thank you for your submission." }, void 0, !1, {
    fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "space-y-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "text-sm text-gray-600 font-medium", children: "The Entire Process is as Follows:" }, void 0, !1, {
      fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ol", { className: "space-y-3 text-sm text-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium", children: "1" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: [
          "Submit your request ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-primary font-medium", children: "(DONE!)" }, void 0, !1, {
            fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
            lineNumber: 41,
            columnNumber: 39
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "bg-gray-200 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium", children: "2" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "Wait for a response from our team" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "bg-gray-200 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium", children: "3" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "Fill out contracts and email Escrow officer" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "bg-gray-200 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium", children: "4" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "We verify that your selected Title Company is aligned" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "bg-gray-200 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium", children: "5" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "We WIRE FUNDS!" }, void 0, !1, {
          fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "button",
    {
      onClick: onReset,
      className: "md:w-auto bg-primary hover:bg-primary-hover text-white font-medium py-2.5 px-6 rounded-md transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg text-sm",
      children: "Return to Dashboard"
    },
    void 0,
    !1,
    {
      fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
      lineNumber: 64,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
    lineNumber: 63,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/forms/EMDForm/Step3Confirmation.tsx",
  lineNumber: 10,
  columnNumber: 5
}, this), Step3Confirmation_default = Step3Confirmation;

// app/components/forms/StepProgress.tsx
var import_react8 = __toESM(require("react")), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), StepProgress = ({ steps: steps2, currentStep }) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center justify-between", children: steps2.map((step, index) => {
  let isActive = step.id === currentStep, isCompleted = step.id < currentStep, isLast = index === steps2.length - 1;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react8.default.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "div",
        {
          className: `flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium transition-all duration-200
                    ${isActive ? "bg-primary text-white shadow-md scale-105" : isCompleted ? "bg-primary-dark text-white" : "bg-gray-200 text-gray-600"}`,
          children: isCompleted ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }, void 0, !1, {
            fileName: "app/components/forms/StepProgress.tsx",
            lineNumber: 32,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/components/forms/StepProgress.tsx",
            lineNumber: 31,
            columnNumber: 21
          }, this) : step.id
        },
        void 0,
        !1,
        {
          fileName: "app/components/forms/StepProgress.tsx",
          lineNumber: 25,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "span",
        {
          className: `mt-1 text-xs
                    ${isActive ? "text-primary font-medium" : isCompleted ? "text-primary-dark" : "text-gray-500"}`,
          children: step.label
        },
        void 0,
        !1,
        {
          fileName: "app/components/forms/StepProgress.tsx",
          lineNumber: 38,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/forms/StepProgress.tsx",
      lineNumber: 24,
      columnNumber: 15
    }, this),
    !isLast && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "div",
      {
        className: `flex-1 h-0.5 mx-1
                    ${step.id < currentStep ? "bg-primary-dark" : "bg-gray-200"}`
      },
      void 0,
      !1,
      {
        fileName: "app/components/forms/StepProgress.tsx",
        lineNumber: 48,
        columnNumber: 17
      },
      this
    )
  ] }, step.id, !0, {
    fileName: "app/components/forms/StepProgress.tsx",
    lineNumber: 23,
    columnNumber: 13
  }, this);
}) }, void 0, !1, {
  fileName: "app/components/forms/StepProgress.tsx",
  lineNumber: 16,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/forms/StepProgress.tsx",
  lineNumber: 15,
  columnNumber: 5
}, this), StepProgress_default = StepProgress;

// app/routes/emd.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), meta2 = () => [
  { title: "Earnest Money Deposit Request | Real Quick Funds" },
  { name: "description", content: "Submit your earnest money deposit request" }
], steps = [
  { id: 1, label: "Borrower Info" },
  { id: 2, label: "Deal Info" },
  { id: 3, label: "Confirmation" }
];
function EMDRoute() {
  let [currentStep, setCurrentStep] = import_react9.default.useState(1), [formData, setFormData] = import_react9.default.useState({}), handleNext = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    let nextStep = Math.min(currentStep + 1, steps.length);
    if (setCurrentStep(nextStep), nextStep === 3) {
      let submissionTime = (/* @__PURE__ */ new Date()).toISOString();
      setTimeout(() => {
        setFormData({ submissionTime });
      }, 2e3);
    }
  }, handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }, updateFormData = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  }, handleReset = () => {
    setFormData({}), setCurrentStep(1);
  }, getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Borrower Information";
      case 2:
        return "Deal Information";
      case 3:
        return "Submission Confirmation";
      default:
        return "Earnest Money Deposit Request";
    }
  }, renderStep = () => {
    switch (currentStep) {
      case 1:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Step1BorrowerInfo_default, { onNext: handleNext, formData }, void 0, !1, {
          fileName: "app/routes/emd.tsx",
          lineNumber: 76,
          columnNumber: 16
        }, this);
      case 2:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          Step2DealInfo_default,
          {
            onNext: handleNext,
            onBack: handleBack,
            updateFormData,
            formData
          },
          void 0,
          !1,
          {
            fileName: "app/routes/emd.tsx",
            lineNumber: 79,
            columnNumber: 11
          },
          this
        );
      case 3:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Step3Confirmation_default, { formData, onReset: handleReset }, void 0, !1, {
          fileName: "app/routes/emd.tsx",
          lineNumber: 87,
          columnNumber: 16
        }, this);
      default:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Step1BorrowerInfo_default, { onNext: handleNext, formData }, void 0, !1, {
          fileName: "app/routes/emd.tsx",
          lineNumber: 89,
          columnNumber: 16
        }, this);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-col bg-gray-50 min-h-[calc(100vh-140px)] w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "max-w-3xl mx-auto px-4 py-6 w-full flex-grow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "text-center mb-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-800 mb-2", children: "EMD Request" }, void 0, !1, {
        fileName: "app/routes/emd.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "w-40 h-1 bg-primary mx-auto mb-2" }, void 0, !1, {
        fileName: "app/routes/emd.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-gray-600 text-sm max-w-2xl mx-auto", children: "Please complete all required information to submit your EMD request." }, void 0, !1, {
        fileName: "app/routes/emd.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/emd.tsx",
      lineNumber: 96,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      StepProgress_default,
      {
        steps,
        currentStep
      },
      void 0,
      !1,
      {
        fileName: "app/routes/emd.tsx",
        lineNumber: 105,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/emd.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md border border-gray-200 p-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "text-lg font-medium text-gray-800 mb-4 pb-2 border-b border-gray-200", children: getStepTitle() }, void 0, !1, {
        fileName: "app/routes/emd.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this),
      renderStep()
    ] }, void 0, !0, {
      fileName: "app/routes/emd.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/emd.tsx",
    lineNumber: 95,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/emd.tsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-3HJSIRSD.js", imports: ["/build/_shared/chunk-GKF6DMLZ.js", "/build/_shared/chunk-SBNNL67F.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DCCUYJ7V.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-46KRHNI5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/emd": { id: "routes/emd", parentId: "root", path: "emd", index: void 0, caseSensitive: void 0, module: "/build/routes/emd-Q4GYKQRG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "32f5df80", hmr: void 0, url: "/build/manifest-32F5DF80.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !1, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_react_stream_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/emd": {
    id: "routes/emd",
    parentId: "root",
    path: "emd",
    index: void 0,
    caseSensitive: void 0,
    module: emd_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
