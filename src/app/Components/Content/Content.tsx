"use client";

import { useState } from "react";

const Content = () => {
  const [text, setText] = useState<String>("");

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const textarea = document.querySelector("textarea");
    setText(textarea?.value || "");
  };
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center">
      <textarea placeholder="Write something in the textarea..." className="my-5 textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
      <button className="my-5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-1/12" onClick={handleButtonClick}>
        Click Me
      </button>
      <p className="text-black">{text}</p>
    </div>
  );
};

export default Content;
