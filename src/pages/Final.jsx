import React, { useState } from "react";

const Final = () => {
  const [status, setStatus] = useState("idle");
  const [noCount, setNoCount] = useState(0);
  const [position, setPosition] = useState({ top: "0px", left: "0px" });

  const noMessages = [
    "Are you sure?",
    "Think again…",
    "Last chance 🥺",
    "Okay fine… I tried 😭",
  ];

  const handleYes = () => {
    setStatus("yes");
  };

  const handleNo = () => {
    const newCount = noCount + 1;
    setNoCount(newCount);

    // Generate random position inside parent container
    const randomTop = Math.floor(Math.random() * 200);
    const randomLeft = Math.floor(Math.random() * 300);

    setPosition({
      top: `${randomTop}px`,
      left: `${randomLeft}px`,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div className="relative h-[70%] w-1/2 bg-[url('/heart-bg.jpg')] bg-cover bg-center rounded-xl shadow-xl p-10 flex flex-col items-center justify-center gap-10 overflow-hidden">

        {status === "idle" && (
          <>
            <h1 className="rubik-puddles-regular text-6xl capitalize text-black">
              Will you go to market with me ?
            </h1>

            {noCount > 0 && noCount <= 4 && (
              <p className="text-red-500 text-lg font-medium">
                {noMessages[Math.min(noCount - 1, noMessages.length - 1)]}
              </p>
            )}

            <div className="relative w-full h-40 flex items-center justify-center">

              {/* YES Button */}
              <img
                src="/yes.png"
                alt="yes"
                onClick={handleYes}
                className="w-20 cursor-pointer hover:scale-110 transition"
              />

              {/* NO Button (moves + disappears after 4 clicks) */}
              {noCount < 4 && (
                <img
                  src="/no.png"
                  alt="no"
                  onClick={handleNo}
                  style={position}
                  className="w-20 cursor-pointer absolute transition-all duration-300"
                />
              )}
            </div>
          </>
        )}

        {status === "yes" && (
          <div className="flex flex-col items-center gap-6">
            <img
              src="/funny.jpeg"
              alt="celebration"
              className="w-40 rounded-2xl"
            />
            <p className="text-lg delius-regular font-bold">
              Hey… this is just for fun 😭 <br />
              Please don’t be offended. <br />
              And don’t tell anyone pleaseeeeeee 🙏.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Final;
