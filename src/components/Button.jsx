export default function Button({ children, className, onClick }) {
  return (
    <button className={`btn ${className} text-white px-5`} onClick={onClick}>
      {children}
    </button>
  );
}
