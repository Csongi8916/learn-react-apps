export default function TabButton({ children, onSelect, isSelected }) {
  console.log('TabBtn exec');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
