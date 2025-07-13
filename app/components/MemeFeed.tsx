// components/MemeFeed.tsx
'use client';

import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import MemeCard from './MemeCard'; // You'll build this next
import { fetchMemes } from '@/lib/fetchMemes'; // Supabase fetch logic

export default function MemeFeed() {
  const [memes, setMemes] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const limit = 10;

  useEffect(() => {
    loadMoreMemes();
  }, []);

  async function loadMoreMemes() {
    const newMemes = await fetchMemes(page, limit);
    console.log(newMemes)
    setMemes((prev) => [...prev, ...newMemes]);
    setPage((prev) => prev + 1);
    if (newMemes.length < limit) setHasMore(false);
  }

  return (
    <InfiniteScroll
      dataLength={memes.length}
      next={loadMoreMemes}
      hasMore={hasMore}
      loader={<div className="text-center p-4">Loading memes...</div>}
      scrollThreshold={0.95}
    >
      <div className="flex flex-col items-center gap-4">
        {memes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </InfiniteScroll>
  );
}
