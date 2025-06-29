import { supabase } from "./supabaseClient";

export const fetchMemes = async (page = 0, pageSize = 10) => {
  const from = page * pageSize;
  const to = from + pageSize - 1;

  const { data, error } = await supabase
    .from("memes")
    .select("*")
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) throw error;
  return data;
};
