// import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const Navigate = useNavigate()
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8 font-sans">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-2">WasteWomen Nepal</h1>
        <p className="text-gray-700 text-lg">
          Empowering women in Nepal’s recycling industry
        </p>
      </header>

      <section className="bg-pink-50 p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Current Stats</h2>
        <p className="text-gray-800 text-lg">
          Women make up only <span className="font-bold text-pink-600">5 - 10%</span> of the recycling workforce in Nepal.
        </p>
      </section>

      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-3">Success Story</h2>
        <blockquote className="italic text-gray-700">
          “Since joining the WasteWomen community, I learned better recycling techniques and started my own small business collecting plastic waste. It’s changed my life!” — Sita, Kathmandu
        </blockquote>
      </section>

      <section className="flex gap-4 justify-center">
        <button onClick={()=>Navigate("/training")} className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition">
          📚 Training & Resources
        </button>
        <button className="bg-pink-100 text-pink-700 px-6 py-3 rounded hover:bg-pink-200 transition">
          🔍 Job Board
        </button>
      </section>
    </div>
  );
}