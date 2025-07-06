import { supabase } from './supabaseClient';

export async function fetchMemes(page = 0, limit = 10) {
  const from = page * limit;
  const to = from + limit - 1;

  const { data, error } = await supabase
    .from('memes')
    .select('*')
    .order('created_at', { ascending: false })
    .range(from, to);

  if (error) {
    console.error('Failed to fetch memes:', error);
    return [];
  }

  return data;
}