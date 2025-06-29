import { useState } from "react";
import "../index.css";
import Footer from "./Footer.js";
import Form from "./form.js";
import Logo from "./logo.js";
import PackingList from "./PackingList.1.js";

function App() {
  const [items, setItems] = useState([]);

  function handleItem(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirm = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirm) setItems([]);
  }

  return (
    <div className="flex flex-col min-h-screen w-screen">
      <Logo />
      <Form handleItem={handleItem} />
      <PackingList
        items={items}
        deleteItem={deleteItem}
        handleToggleItem={handleToggleItem}
        handleClearList={handleClearList}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
