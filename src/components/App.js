import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { Stats } from "./Stats";
import { PackingList } from "./PackingList";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true }

];
function App() {
  const [items, setItems] = useState(initialItems);
  const numItems = items.length;

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item));
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
      <Stats items={items} />

    </div>
  )
}




export default App;
