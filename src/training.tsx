

export default function Training() {
  const resources = [
    {
      id: 1,
      title: "Basics of Recycling",
      description: "Learn how to sort and handle different types of waste properly.",
      link: "#",
    },
    {
      id: 2,
      title: "Health & Safety Tips",
      description: "Important safety measures for women working in recycling.",
      link: "#",
    },
    {
      id: 3,
      title: "Starting a Small Recycling Business",
      description: "Steps and ideas for turning recycling into a livelihood.",
      link: "#",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 font-sans">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">Training & Resources</h1>
      <ul className="space-y-4">
        {resources.map((resource) => (
          <li key={resource.id} className="bg-pink-50 p-4 rounded shadow">
            <h2 className="text-xl font-semibold text-pink-700">{resource.title}</h2>
            <p className="text-gray-700 mb-2">{resource.description}</p>
            <a
              href={resource.link}
              className="text-pink-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Learn More →
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
