interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'reset';
  className?: string;
}
export default function Button({ children, onClick, type, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 p-2 rounded-md w-full text-center hover:opacity-90 ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}
