import "./App.css";
import HeroSection from "./HeroSection";
import TextArea from "./TextArea";
import Summary from "./Summary";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [texToSumarize, setTexToSumarize] = useState();
  const [summarizedText, setSummarizedText] = useState();
  const [keyPoints, setKeyPoints] = useState([]);

  async function fetchData() {
    if (!texToSumarize) return; // Don't fetch if texToSumarize is empty

    try {
      setLoading(true);

      // Send a POST request to the backend server
      const response = await fetch("http://localhost:4000/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: texToSumarize, summary_length: "medium" }), // You can adjust summary_length as needed
      });

      if (!response.ok) {
        throw new Error("Error fetching summarized text");
      }

      const responseText = await response.json();
      setSummarizedText(responseText.summary);
      setKeyPoints(responseText.key_points); // Set the summarized text
    } catch (error) {
      setError(error.message); // Handle error
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [texToSumarize]);

  return (
    <>
      <HeroSection>
        <TextArea onSubmit={setTexToSumarize} />
      </HeroSection>
      <Summary
        text={summarizedText}
        keyPoints={keyPoints}
        loading={loading}
        error={error}
      />
    </>
  );
}

export default App;
