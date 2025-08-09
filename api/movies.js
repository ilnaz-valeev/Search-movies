// api/movies.js  (в корне репо kinotap)
export default async function handler(req, res) {
  try {
    const apiKey = process.env.TMDB_API_KEY;
    const r = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    if (!r.ok)
      return res.status(r.status).json({ error: "Failed to fetch movies" });
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
