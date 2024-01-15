export default function TabButton({ children, isSelected, ...props }) {
  console.log('TabBtn exec');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
