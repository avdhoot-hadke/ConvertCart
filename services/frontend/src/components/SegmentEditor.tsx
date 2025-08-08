import { useState } from "react";
import axios from "axios";

function SegmentEditor({ setProducts }: { setProducts: any }) {
  const [filterVisible, setFilterVisible] = useState(true);
  const [inputRules, setInputRules] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const toggleFilter = () => setFilterVisible(!filterVisible);

  const handleInputChange = (e: any) => setInputRules(e.target.value);

  const evaluateFilter = async () => {
    setErrorMsg(null);
    try {
      const url = import.meta.env.VITE_SEGMENT_SERVICE;
      if (!url) {
        throw new Error("Backend URL is not set in environment variables");
      }
      const res = await axios.post(`${url}/segments/evaluate`, {
        rules: inputRules,
      });
      setProducts(res.data);
    } catch {
      setErrorMsg("Evaluation failed. Please check your filter rules.");
    }
  };

  const resetFilter = async () => {
    const url = import.meta.env.VITE_SEGMENT_SERVICE;

    setInputRules("");
    setErrorMsg(null);
    console.log("IN PUT RULES ", inputRules);
    const res = await axios.post(`${url}/segments/evaluate`, {
      rules: "",
    });
    console.log("RESET ____", res.data);
    setProducts(res.data);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mx-auto">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold mb-4">Define Filter Conditions</h2>
        <button
          className="mb-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={toggleFilter}
        >
          {filterVisible ? "Hide Filter" : "Show Filter"}
        </button>
      </div>
      {filterVisible && (
        <>
          <textarea
            rows={3}
            className="w-full border rounded p-2 mb-2 text-gray-600"
            placeholder="Enter filter rules (one per line)"
            value={inputRules}
            onChange={handleInputChange}
          />
          <p className="text-sm text-gray-500 mb-4">
            Examples: price &gt; 5000, category = Smartphones, stock_status =
            instock
          </p>
          <button
            className="bg-black text-white px-4 py-2 rounded mr-2 hover:bg-gray-800"
            onClick={evaluateFilter}
          >
            Evaluate Filter
          </button>
          <button
            className="border px-4 py-2 rounded hover:bg-gray-100"
            onClick={resetFilter}
          >
            Reset
          </button>
          <div className="mt-4 bg-gray-100 p-2 rounded text-gray-700">
            <p>Supported operators:</p>
            <p>
              =&nbsp;&nbsp;&nbsp;&nbsp;!=&nbsp;&nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&nbsp;&nbsp;&nbsp;&nbsp;&gt;=&nbsp;&nbsp;&nbsp;&nbsp;&lt;=
            </p>
          </div>
        </>
      )}
      {errorMsg && <p className="text-red-600 mt-2">{errorMsg}</p>}
    </div>
  );
}

export default SegmentEditor;
