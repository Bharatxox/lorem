import { useState } from "react";
import "./App.css";
import data from "./data.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const [lorem, setlorem] = useState("");
  const [num, setnum] = useState(0);
  const [val, setval] = useState([]);

  const generate = () => {
    if (num <= 0 || num > 9) {
      setval([]);
      toast.warning("Plz fill the data in between 1 to 8", {
        position: "top-center",
        theme: "dark",
      });
      return;
    }
    setval(data.slice(0, num));
    toast.success("Doneee!!!!!", {
      position: "top-center",
      theme: "dark",
    });
  };
  return (
    <>
      <section className=" h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto p-10  rounded-lg shadow-lg bg-neutral-700">
          <h1 className="text-3xl font-bold mb-6">
            TIRED OF BORING LOREM IPSUM?
          </h1>
          <div className="flex items-center space-x-4 mb-6 justify-center">
            <p>Paragraphs:</p>
            <input
              type="number"
              value={num}
              onChange={(e) => setnum(e.target.value)}
              className="border border-gray-300 px-2 py-1 rounded"
            />
            <button
              onClick={generate}
              className="px-4 py-2  transition duration-300"
            >
              GENERATE
            </button>
          </div>
          <div>
            <ul>
              {val.map((e, index) => (
                <li key={index} className="mb-2">
                  <span className="font-bold">{index + 1}</span>
                  <span className="ml-2 text-start">{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}

export default App;
