export function Item({ item, onDelete, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quan} {item.desc}
      </span>
      <button onClick={() => onDelete(item.id)}> ❌</button>
    </li>
  );
}
