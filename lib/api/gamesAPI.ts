import { GamesResponse } from "@/types/games";

export const fetchGames = async (): Promise<GamesResponse> => {
  const res = await fetch("https://api.remailer.eu/games/list.php", {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }

  return await res.json();
};
