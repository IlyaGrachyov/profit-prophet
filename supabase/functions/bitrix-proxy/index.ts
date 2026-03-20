const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const BITRIX_URL = "https://crm.profi-soft.kz/rest/5877/m4hhacmfv8f1znkb";

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, budget } = await req.json();

    const params = new URLSearchParams({
      'fields[TITLE]': `Заявка с сайта - Marketing Gid: ${name}`,
      'fields[UF_CRM_5F100653C8C97]': name,
      'fields[UF_CRM_LEAD_1773830562571]': phone,
      'fields[UF_CRM_1773900058]': budget ? `Бюджет: ${budget}` : '',
      'fields[PHONE][0][VALUE]': phone,
      'fields[PHONE][0][VALUE_TYPE]': 'WORK',
    });

    const response = await fetch(
      `${BITRIX_URL}/crm.lead.add.json?${params.toString()}`
    );

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
