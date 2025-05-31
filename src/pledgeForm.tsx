import { useState } from "react";

function PledgeForm() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Take the Pledge</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded"
            required
          />
          <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
            I Pledge to Reduce Plastic
          </button>
        </form>
      ) : (
        <p className="text-green-700 text-lg">Thank you, {name}! You've taken the pledge. 🌱</p>
      )}
    </div>
  );
}
export default PledgeForm;