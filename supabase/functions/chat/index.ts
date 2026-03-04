import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          {
            role: "system",
            content: `You are Abancool AI, the helpful assistant for Abancool Technologies – a full-service technology company based in Garissa, Kenya.

You help visitors learn about our services:
- Web Development (business sites, e-commerce, portfolios, custom web apps)
- Software Development (enterprise systems, automation tools)
- Mobile App Development (Android, iOS, hybrid, PWA)
- System Development (Hospital, School, Property/Rental, Financial/Wallet, Inventory, POS systems)
- Integrations (M-Pesa, SMS, Payment gateways, APIs & more)
- Web Hosting (Shared, VPS, Dedicated, Domain, Email hosting)
- Booking & Flight Systems (flight booking, hotel reservations, event booking, appointment scheduling)
- Bulk SMS Services (SMS gateway, API integration, campaigns, transactional SMS, analytics)

Contact: Phone 0111 679 286 / 0728 825 152, Email info@abancool.com, Location Garissa Kenya.
WhatsApp: https://wa.me/254728825152

IMPORTANT INSTRUCTIONS:
- Be friendly, professional, and concise.
- Answer in the language the user writes in.
- For ANY question about pricing, quotes, project timelines, custom requirements, or detailed discussions, ALWAYS encourage the user to continue the conversation on WhatsApp for real-time live support with our team.
- When suggesting WhatsApp, tell them to click the "Chat on WhatsApp" button below or use this link: https://wa.me/254728825152
- Include a summary of what the user is asking about so the admin on WhatsApp has context.
- Format WhatsApp suggestions like: "For a detailed discussion about [topic], I'd recommend chatting with our team directly on WhatsApp for real-time support! 💬"
- You can answer general questions about services, but always offer WhatsApp as the next step for personalized help.`,
          },
          ...messages.map((m: { role: string; content: string }) => ({
            role: m.role,
            content: m.content,
          })),
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited, please try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
