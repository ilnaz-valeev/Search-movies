export default async function handler(req, res) {
  const apiKey = process.env.TMDB_API_KEY;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Failed to fetch movies" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
