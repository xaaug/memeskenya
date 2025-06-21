type Meme = {
  id: string
  image_url: string
  caption?: string
}

const MemeCard = ({ meme }: { meme: Meme }) => {
  return (
    <div className="mb-6">
      <img
        src={meme.image_url}
        alt={meme.caption || 'Meme'}
        className="h-[400px] rounded-md object-cover"
      />
      {meme.caption && <p className="mt-2 text-center text-sm text-gray-700">{meme.caption}</p>}
      <a
        href={meme.image_url}
        download
        className="mt-2 block w-full rounded bg-black py-2 text-white text-center text-sm"
      >
        Download
      </a>
    </div>
  )
}

export default MemeCard
