interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}
export default function Button({
  children,
  onClick,
  type,
  className,
  disabled = false
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-indigo-600 p-2 rounded-md w-fit text-center hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}
