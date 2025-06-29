import { useState } from "react";
export default function Form({ handleItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    handleItem(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="h-[80px] flex items-center justify-center gap-2 bg-amber-700 px-4 flex-wrap"
    >
      <p className="font-mono text-white">What do you need for your trip?</p>
      <select
        className="p-1 rounded-md bg-amber-200 border border-black"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-1 rounded-md bg-amber-200 border border-black"
      />
      <button className="rounded-md p-1 px-2 border border-black bg-cyan-500">
        ADD
      </button>
    </form>
  );
}
