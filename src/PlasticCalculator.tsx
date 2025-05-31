import { useState } from "react";

function PlasticCalculator() {
  const [bottles, setBottles] = useState(0);
  const [bags, setBags] = useState(0);
  const total = bottles * 30 + bags * 20;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Plastic Usage Estimator</h2>
      <div className="flex flex-col gap-4 max-w-sm">
        <label>
          Bottles per week:
          <input type="number" value={bottles} onChange={(e) => setBottles(Number(e.target.value))} className="ml-2 p-1 border rounded" />
        </label>
        <label>
          Bags per week:
          <input type="number" value={bags} onChange={(e) => setBags(Number(e.target.value))} className="ml-2 p-1 border rounded" />
        </label>
        <div className="mt-4 text-lg font-medium">
          Estimated plastic use per year: <span className="text-red-600">{total} items</span>
        </div>
      </div>
    </div>
  );
}
export default PlasticCalculator;