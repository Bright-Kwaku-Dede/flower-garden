import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFlowers } from "./api/flowers";

function App() {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await getFlowers();
      setFlowers(res.data);
    };
    load();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-emerald-50">
      <div className="max-w-5xl mx-auto py-10 px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-emerald-700">
            Flower Garden Nursery
          </h1>
          <p className="text-rose-500 mt-2">
            24 special flowers, gently cared for.
          </p>
        </header>
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {flowers.map((flower) => (
    <div
      key={flower.id}
      className="bg-white/80 border border-rose-100 rounded-2xl shadow-sm p-4 flex flex-col gap-2"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-emerald-700">
          {flower.name}
        </h2>
        <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
          {flower.color}
        </span>
      </div>

      <p className="text-sm text-rose-500">
        Water every{" "}
        <span className="font-semibold text-rose-600">
          {flower.waterEvery} days
        </span>
      </p>

      <p className="text-sm">
        Stage:{" "}
        <span className="font-semibold text-amber-600">
          {flower.stage}
        </span>
      </p>

      <Link
        to={`/flower/${flower.id}`}
        className="mt-3 text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-700 border border-pink-200 hover:bg-pink-200"
      >
        View care details
      </Link>
    </div>
  ))}
</section>
      </div>
    </div>
  );
}

export default App;

