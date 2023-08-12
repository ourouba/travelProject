import {useState} from "react";
export function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(5);
  
  
  
    function handleSubmit(e) {
      e.preventDefault();
      if (!description) return;
      const newItem = { description, quantity, packed: false, id: Date.now() };
      onAddItems(newItem);
      setDescription("");
      setQuantity(1);
  
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you want to take for your trip ?</h3>
        <select onChange={(e) => setQuantity(e.target.value)}>
          <option value={1}>1 </option>
          <option value={2}>2 </option>
          <option value={3}>3 </option>
        </select>
        <input type="text" placeholder="Item" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button>Add </button>
      </form>
    )
  }
  