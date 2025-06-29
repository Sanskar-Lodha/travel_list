export default function Item({ item, deleteItem, handleToggleItem }) {
  return (
    <li className="flex items-center gap-2 text-white text-lg">
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => handleToggleItem(item.id)}
      />
      <span className={item.packed ? "line-through" : ""}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}
