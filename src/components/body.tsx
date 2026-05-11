import { useEffect, useState } from "react";

interface Article {
  image: string;
  title: string;
  category: string;
  date: string;
}

const BodyContent = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const isLocal = window.location.hostname === "localhost";
  const apiUrl = isLocal ? "http://localhost:8000/data.php" : "/api/data.php";

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .finally(() => setLoading(false))
      .catch((err) => console.error(err));
  }, [apiUrl]);

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {articles.map((article, index) => (
          <div
            key={index}
            className="relative group overflow-hidden aspect-[4/3] hover:cursor-pointer"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="border border-white/40 p-1 w-full h-full flex items-center justify-center">
                <div className="bg-black/70 border border-white/60 w-full py-8 px-4 text-center text-white">
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-2">
                    <span className="text-orange-400">...</span>{" "}
                    {article.category}{" "}
                    <span className="text-orange-400">...</span>
                  </p>
                  <h2 className="text-lg font-serif tracking-widest mb-2 px-2">
                    {article.title}
                  </h2>
                  <p className="text-[9px] italic font-light text-gray-300 tracking-wider">
                    {article.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyContent;
