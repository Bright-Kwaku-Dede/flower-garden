import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFlowers } from "../api/flowers";

export default function FlowerDetails() {
  const { id } = useParams();
  const [flower, setFlower] = useState(null);

  useEffect(() => {
    const load = async () => {
      const res = await getFlowers();
      const found = res.data.find((f) => f.id === Number(id));
      setFlower(found);
    };
    load();
  }, [id]);

  if (!flower) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-emerald-50">
      <div className="max-w-3xl mx-auto py-10 px-4">
        <Link
          to="/"
          className="text-emerald-700 hover:text-emerald-900 font-semibold"
        >
          ← Back to Garden
        </Link>

        <div className="mt-6 bg-white/80 border border-rose-100 rounded-2xl shadow-sm p-6">
          <h1 className="text-3xl font-bold text-emerald-700">
            {flower.name}
          </h1>

          <p className="mt-2 text-rose-500">
            A gentle flower in your nursery.
          </p>

          <div className="mt-6 grid gap-4">
            <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
              <h2 className="text-lg font-semibold text-emerald-700">
                Watering Schedule
              </h2>
              <p className="text-rose-600 mt-1">
                Water every{" "}
                <span className="font-bold">{flower.waterEvery} days</span>.
              </p>
            </div>

            <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-xl">
              <h2 className="text-lg font-semibold text-yellow-700">
                Sunlight Needs
              </h2>
              <p className="text-yellow-600 mt-1">
                {flower.sunlight || "Moderate sunlight"}.
              </p>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl">
              <h2 className="text-lg font-semibold text-amber-700">
                Growth Stage
              </h2>
              <p className="text-amber-600 mt-1">{flower.stage}</p>
            </div>

            <div className="p-4 bg-pink-50 border border-pink-100 rounded-xl">
              <h2 className="text-lg font-semibold text-pink-700">
                Notes
              </h2>
              <p className="text-pink-600 mt-1">
                {flower.notes || "No notes yet."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
