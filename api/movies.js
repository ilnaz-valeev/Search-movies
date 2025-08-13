import Cors from "cors";

// Инициализация CORS
const cors = Cors({
  methods: ["GET", "POST"],
  origin: "http://localhost:5173", // Локальный адрес
});

// Функция для выполнения CORS middleware
const runMiddleware = (req, res, fn) =>
  new Promise((resolve, reject) => {
    fn(req, res, (result) =>
      result instanceof Error ? reject(result) : resolve(result)
    );
  });

export default async function handler(req, res) {
  await runMiddleware(req, res, cors); // Запуск CORS middleware

  try {
    const apiKey = process.env.TMDB_API_KEY;
    const r = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    if (!r.ok)
      return res.status(r.status).json({ error: "Не удалось получить фильмы" });
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
}
