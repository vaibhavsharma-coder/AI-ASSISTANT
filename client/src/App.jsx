
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import Loading from "./Loading";

function App() {
  const [question, setQuestion] = useState("");
  const [data, setData] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (question.trim() === "") {
      alert("Please enter a question.");
      return;
    }

    setLoadingStatus(true);
    setData("");

    try {
      const res = await axios.post("http://localhost:8120/ask", {
        question,
      });

      setData(res.data.finalData);
    } catch (err) {
      console.log(err);
      setData("Unable to fetch response. Please try again.");
    }

    setLoadingStatus(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-2">
          Gemini Chat App
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Ask your questions and get AI generated responses.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Left Side */}

          <div className="bg-white shadow rounded-lg p-5">

            <h2 className="text-xl font-semibold mb-4">
              Ask a Question
            </h2>

            <form onSubmit={handleSubmit}>

              <textarea
                className="w-full h-80 border rounded-md p-3 outline-none focus:border-blue-500"
                placeholder="Type your question here..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />

              <button
                type="submit"
                disabled={loadingStatus}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
              >
                {loadingStatus ? "Generating..." : "Generate"}
              </button>

            </form>

          </div>

          {/* Right Side */}

          <div className="bg-white shadow rounded-lg p-5">

            <h2 className="text-xl font-semibold mb-4">
              Response
            </h2>

            <div className="border rounded-md p-4 h-96 overflow-y-auto">

              {loadingStatus ? (
                <Loading />
              ) : data ? (
                <ReactMarkdown>{data}</ReactMarkdown>
              ) : (
                <p className="text-gray-500">
                  The generated response will appear here.
                </p>
              )}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

