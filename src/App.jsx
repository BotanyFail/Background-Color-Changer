import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("rgb(0,0,0)");

  return (
    <>
      <div className="w-screen h-screen" style={{ backgroundColor: color }}>
        <div className="flex flex-wrap justify-center bottom-10 fixed inset-x-10">
          <div className="flex flex-wrap justify-center bg-white py-3 px-4 rounded-full gap-3">
            <button
              className="px-5 py-2 text-white rounded-full shadow-xl bg-violet-600 hover:bg-violet-700"
              onClick={() => setColor("rgb(124 58 237")}
            >
              Violet
            </button>
            <button
              className="px-5 py-2 text-white rounded-full shadow-xl bg-blue-600 hover:bg-blue-700"
              onClick={() => setColor("rgb(37 99 235)")}
            >
              Blue
            </button>
            <button
              className="px-5 py-2 text-white rounded-full shadow-xl bg-cyan-600 hover:bg-cyan-700"
              onClick={() => setColor("rgb(8 145 178)")}
            >
              Cyan
            </button>
            <button
              className="px-5 py-2 text-white rounded-full shadow-xl bg-green-600 hover:bg-green-700"
              onClick={() => setColor("rgb(22 163 74)")}
            >
              Green
            </button>
            <button
              className="px-5 py-2 text-white rounded-full shadow-xl bg-yellow-600 hover:bg-yello-700"
              onClick={() => setColor("rgb(202 138 4)")}
            >
              Yellow
            </button>
            <button
              className="outline-none px-5 py-2 text-white rounded-full shadow-xl bg-orange-600 hover:bg-orange-700"
              onClick={() => setColor("rgb(234 88 12)")}
            >
              Orange
            </button>
            <button
              className="outline-none px-5 py-2 text-white rounded-full shadow-xl bg-red-600 hover:bg-red-700"
              onClick={() => setColor("rgb(220 38 38)")}
            >
              Red
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
