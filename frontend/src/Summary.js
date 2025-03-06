import React from "react";

export default function Summary({ text, keyPoints, loading, error }) {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!text) return null;

  return (
    <article className="m-20">
      <h2 className="text-xl font-semibold">Summary</h2>
      <p>{text}</p>
      <h3 className="text-lg font-semibold mt-4">Key Points</h3>
      {keyPoints && keyPoints.length > 0 && (
        <ul className="list-disc pl-5 mt-2">
          {keyPoints.map((point, index) => (
            <li key={index} className="text-sm text-gray-700">
              {point}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
