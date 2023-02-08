import { useLoaderData } from "@remix-run/react";
import supabase from "utils/supabase";

export const loader = async () => {
  const { data, error } = await supabase.from("messages").select("*");
  return { data, error };
};

export default function Index() {
  const {data} = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
