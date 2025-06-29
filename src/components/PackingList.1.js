import { useState } from "react";
// import { Item } from "./App";
import Item from "./Item";

export default function PackingList({
  items,
  deleteItem,
  handleToggleItem,
  handleClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = [...items];
  if (sortBy === "description") {
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="flex-grow bg-amber-950 px-4 py-6 overflow-auto flex flex-col">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>

      <div className="mt-auto mb-5 flex flex-col sm:flex-row justify-center items-center gap-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-amber-200 rounded-md px-3 py-1 font-quicksand"
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button
          className="bg-amber-200 rounded-md px-3 py-1 font-quicksand"
          onClick={handleClearList}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}
