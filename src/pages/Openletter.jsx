import React from "react";
import { useNavigate } from "react-router-dom";

const Openletter = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center  relative">

      <div className="relative h-[90%] w-[600px] bg-[url('/heart-bg.jpg')] bg-cover bg-center rounded-xl shadow-xl pt-5 flex flex-col items-center justify-center gap-8">

        {/* Paper Image */}
        <img
          className="w-[80%]"
          src="/blankpaper2.png"
          alt="letter paper"
        />

        {/* Letter Text */}
        <div className="absolute w-[50%] text-center indie-flower-regular text-lg leading-relaxed">
          <p>I didn’t plan to build this.
But sometimes I feel like I never truly gave my full effort.
Maybe because I wasn’t sure if I was the kind of person you would choose.

But honestly… there’s something about your smile that I’ve always liked more than I probably should.
It’s simple, yet it stays with me longer than I expect.</p>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/main")}
          className="mt-4 mb-4 px-6 py-2 rounded-full text-white bg-rose-400 hover:bg-rose-500 active:scale-95 transition"
        >
          One Last Thing
        </button>
      </div>

      {/* Decorative GIFs */}
      <img
        className="absolute bottom-10 right-10 w-16"
        src="/cat_dance.gif"
        alt="fun"
      />

      <img
        className="absolute top-10 left-10 w-16"
        src="/cat_heart.gif"
        alt="love"
      />

    </div>
  );
};

export default Openletter;
