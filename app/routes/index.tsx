import { useLoaderData } from "@remix-run/react";
import supabase from "utils/supabase";

import type { LoaderArgs } from "@remix-run/node";

export const loader = async ({}: LoaderArgs) => {
  const { data } = await supabase.from("messages").select();
  return { messages: data ?? [] };
};

export default function Index() {
  const { messages } = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <pre>{JSON.stringify(messages, null, 2)}</pre>
    </div>
  );
}
