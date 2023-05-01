import { useLanyardWS } from "use-lanyard";

const DISCORD_ID = "1071630966734458952";

export default function LiveActivity() {
  const data = useLanyardWS(DISCORD_ID);
  console.log(data);
  return (
    <>
      {data?.listening_to_spotify ? (
        <div className="h-32 md:h-28 w-full md:w-max max-w-md bg-emerald-700/10 flex self-stretch border-2 border-emerald-500/60 overflow-hidden transition-all">
          <img src={data.spotify?.album_art_url} className="h-full aspect-square" />
          <div className="w-full flex flex-col px-3 py-3">
            <div>
              <h3 className="font-souvenir text-base font-bold">{data.spotify?.song?.length > 35 ? data.spotify?.song?.slice(0, 35) + "..." : data.spotify?.song}</h3>
              <p className="text-[11px] text-zinc-400 font-medium">{data.spotify?.artist}</p>
            </div>

            <a
              href={`https://open.spotify.com/track/${data.spotify?.track_id}`}
              className="bg-emerald-800/20 text-zinc-200 hover:text-current hover:scale-95 text-[10px] font-medium pl-2 pr-3 py-2 self-end mt-auto transition-all"
              target="_blank"
              rel="noreferrer">
              <img src={`https://cdn.simpleicons.org/spotify`} className="w-5 aspect-square inline mr-1" /> Play on Spotify
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
