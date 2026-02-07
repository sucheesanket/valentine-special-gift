import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Openbox = () => {
  const navigate = useNavigate();

  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("idle"); 
  const [wrongIndex, setWrongIndex] = useState(0);

  const wrongMessages = [
    "Hmm… look carefully.",
    "Read it once more.",
    "You're close, I think.",
    "Not quite… try again.",
  ];

  const handleCheck = () => {
    const formatted = answer.trim().toLowerCase();

    if (!formatted) {
      setStatus("wrong");
      return;
    }

    if (formatted === "my smile") {
      setStatus("correct");
    } else {
      setStatus("wrong");
      setWrongIndex((prev) => (prev + 1) % wrongMessages.length);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="h-[70%] w-1/2 bg-[url('/heart-bg.jpg')] bg-cover bg-center rounded-xl shadow-xl p-10 text-center">

        <h2 className="text-4xl font-bold rubik-puddles-regular text-gray-900">
          This page was made for someone special...
        </h2>

        {status !== "correct" && (
          <>
            <p className="pt-16 text-xl font-medium delius-regular">
              It curves, but it’s not a road. <br />
              It shines, but it’s not the sun. <br />
              It happens in a second, <br />
              Yet lingers longer than expected. <br />
              You don’t hear it… but you feel it.
            </p>

            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              disabled={status === "correct"}
              placeholder="Answer..."
              className="border px-2 py-1 w-28 rounded-lg mt-10 delius-regular"
            />

            <div className="mt-6">
              <button
                onClick={handleCheck}
                disabled={status === "correct"}
                className="px-6 py-2 rounded-full text-white bg-pink-500 hover:bg-pink-600 active:scale-95 cursor-pointer delius-regular transition"
              >
                Check
              </button>
            </div>
          </>
        )}

        {status === "wrong" && (
          <p className="text-red-500 mt-4 delius-regular">
            {wrongMessages[wrongIndex]}
          </p>
        )}

        {status === "correct" && (
          <div className="mt-8 space-y-4">
            <p className="text-green-600 text-lg font-semibold delius-regular">
              I knew you’d get it.
            </p>

            <button
              className="px-6 py-2 rounded-full text-white bg-purple-500 hover:bg-purple-600 active:scale-95 cursor-pointer transition"
             onClick={() => navigate("/letter")}

            >
              There’s something more
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Openbox;
