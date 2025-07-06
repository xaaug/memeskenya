
export default function MemeCard({ meme }) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-background text-foreground p-4">
      <img
        src={meme.image_url}
        alt={meme.caption}
        className="object-contain max-h-[80%] w-auto rounded-lg"
      />
      <p className="mt-4 text-sm text-muted">{meme.caption}</p>
      <a
        href={meme.image_url}
        download
        className="mt-2 px-4 py-2 text-sm bg-foreground text-background rounded hover:opacity-80 transition"
      >
        Download
      </a>
    </div>
  );
}
