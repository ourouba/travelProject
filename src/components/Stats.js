
export function Stats({items}) {
    const numItems = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const percentage = Math.round(numPacked*100/numItems);
    return <footer className="stats">
      <em> You have {numItems} item on your list and you already packed {numPacked} ({percentage}%)✔ </em>
    </footer>
  }

  
  