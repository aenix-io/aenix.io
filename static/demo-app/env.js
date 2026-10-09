// Demo runtime configuration (static). In a real deploy the dashboard chart
// mounts this file from a ConfigMap; the demo ships it as-is so the portal
// boots with the neutral Ænix Platform identity, the managed-services
// catalogue enabled and no external URLs (docs/Keycloak/admin cross-links
// resolve to nothing instead of leaking a real host).
// The deploy base ("/" locally, "/demo-app/" inside the aenix.io embed) is
// wherever this file was served from: the vendored docs live next to it.
var DEMO_BASE = (function () {
  var src = document.currentScript && document.currentScript.src
  return src ? new URL(".", src).pathname : "/"
})()
// One origin serves the tenant portal and the back-office (one bundle).
// Giving both cross-portal URLs this same base tells the shared helpers
// (packages/ui cross-portal-url.ts) that the back-office is reachable and
// same-origin: the top bar shows the Admin entry, admin links are absolute
// under the deploy base, tenant links stay relative.
var DEMO_ORIGIN_BASE = window.location.origin + DEMO_BASE.replace(/\/$/, "")

window.__ENV__ = {
  // No documentation site in the demo: the Docs nav entry is removed at
  // the demo layer (packages/ui/src/lib/portal-nav.ts), so these are unused.
  DOCS_URL: "",
  ADMIN_DOCS_URL: "",
  USER_SETTINGS_URL: "",
  USER_PROFILE_URL: "",
  KEYCLOAK_URL: "",
  BASE_DOMAIN: "demo.aenix.example",
  PORTAL_URL: DEMO_ORIGIN_BASE,
  ADMIN_URL: DEMO_ORIGIN_BASE,
  EXPERIMENTAL_MANAGED_SERVICES_ENABLED: "true",
  NOTIFICATION_RULES_MANAGEMENT: "true",
  // AI Gateway section (lexfrei's feat/ai-gateway-section): the broker at
  // /ai-api/v1 and the gateway at this same-origin path are both answered
  // by the in-browser mock, so nothing leaves the page.
  FEATURE_AI_GATEWAY: "true",
  LITELLM_GATEWAY_URL: "/ai-gateway",
  BRAND_NAME: "Ænix Platform",
  BRAND_TITLE: "Ænix Platform — demo",
  BRAND_LOGO: "",
  BRAND_FAVICON: "",
  // Ænix Platform wordmark, inlined so the header renders the brand mark
  // without any external asset (the head applier + Header read it as
  // trusted operator config).
  BRAND_LOGO_SVG: "<svg width=\"548\" height=\"84\" viewBox=\"22 108 548 84\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Ænix Platform\"><path d=\"M213.445 188.426H198.415V143.066H213.445V188.426ZM135.87 112V112.182L142.146 118.693L135.87 125.207V125.389H93.0537L96.8252 142.786H135.763V156.282H99.7754L103.824 174.864H135.87V188.253H91.5195L91.4893 188.109L87.9688 171.783H54.7891L45.1006 188.163L45.0479 188.253H27L27.1748 187.974L74.8643 112.085L74.918 112H135.87ZM235.407 142.736L245 154.886L254.519 142.736L254.573 142.667H271.461L271.216 142.965L253.206 164.757L272.521 187.954L272.768 188.252H255.787L255.732 188.184L244.926 174.675L234.194 188.184L234.14 188.252H217.252L217.499 187.954L236.727 164.764L218.712 142.965L218.465 142.667H235.353L235.407 142.736ZM173.044 141.833C176.852 141.833 179.999 142.541 182.474 143.971C184.951 145.34 186.805 147.456 188.039 150.307C189.272 153.095 189.884 156.646 189.884 160.951V188.251H174.98V161.595C174.98 159.525 174.693 157.868 174.13 156.613L174.126 156.604C173.626 155.29 172.85 154.379 171.807 153.852L171.801 153.849L171.796 153.845C170.805 153.254 169.523 152.952 167.94 152.952C165.912 152.952 164.146 153.375 162.637 154.216L162.635 154.217C161.191 154.996 160.06 156.134 159.241 157.637C158.423 159.138 158.012 160.885 158.012 162.882V188.251H143.108V142.752H157.724V148.953C159.089 147.042 160.829 145.503 162.941 144.338C165.924 142.667 169.293 141.833 173.044 141.833ZM62.6602 158.395H85.0879L79.0703 130.707L62.6602 158.395ZM214.025 134.724H197.835V121.438H214.025V134.724Z\" fill=\"#01A5FF\"/><text x=\"296\" y=\"186\" font-family=\"Inter, system-ui, sans-serif\" font-size=\"56\" font-weight=\"600\" fill=\"#334155\">Platform</text></svg>",
};
