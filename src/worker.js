export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle Contact Form API Endpoint
    if (url.pathname === "/api/contact") {
      const allowedOrigins = [
        "https://www.simbnext.com",
        "https://simbnext.com",
        "https://www.simbfore.io",
        "https://simbfore.io",
        "https://www.simb.dev",
        "https://simb.dev",
        "https://www.simb.co.in",
        "https://simb.co.in",
        "http://localhost:4321",
        "http://localhost:8787",
        "http://localhost:8788",
      ];
      const origin = request.headers.get("origin") || "";
      const isAllowed =
        allowedOrigins.includes(origin) ||
        origin.endsWith(".pages.dev") ||
        origin.endsWith(".workers.dev") ||
        origin.endsWith(".vercel.app");

      const corsHeaders = {
        "Access-Control-Allow-Origin": isAllowed ? origin : "https://www.simbnext.com",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      };

      if (request.method === "OPTIONS") {
        return new Response(null, { status: 204, headers: corsHeaders });
      }

      if (request.method === "POST") {
        const webhookUrl =
          env.CONTACT_WEBHOOK_URL ||
          env.PUBLIC_CONTACT_WEBHOOK_URL ||
          "https://xxn.otbix.com/webhook/simbnect-contact-form";

        try {
          const payload = await request.json();
          const upstream = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload ?? {}),
          });

          const text = await upstream.text();
          let data = null;
          try {
            data = JSON.parse(text);
          } catch {
            data = null;
          }

          if (!data || data.success !== true) {
            return new Response(
              JSON.stringify({ success: false, error: "Submission was not confirmed" }),
              { status: 502, headers: { "Content-Type": "application/json", ...corsHeaders } }
            );
          }

          return new Response(
            JSON.stringify({ success: true, stored: true }),
            { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
          );
        } catch {
          return new Response(
            JSON.stringify({ success: false, error: "Upstream request failed" }),
            { status: 502, headers: { "Content-Type": "application/json", ...corsHeaders } }
          );
        }
      }

      return new Response(JSON.stringify({ success: false, error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Pass through to Static Assets
    return env.ASSETS.fetch(request);
  },
};
