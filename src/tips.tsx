function Tips() {
  const tips = [
    "Use reusable bags instead of plastic ones",
    "Carry a refillable water bottle",
    "Avoid single-use straws and utensils",
    "Buy in bulk to reduce packaging waste",
    "Choose glass or metal containers"
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Plastic Reduction Tips</h2>
      <ul className="list-disc list-inside">
        {tips.map((tip, index) => (
          <li key={index} className="mb-2">{tip}</li>
        ))}
      </ul>
    </div>
  );
}
export default Tips;