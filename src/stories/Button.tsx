import '../index.css';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, variant, size, ...props }: ButtonProps) => {
  const variantButton: Record<ButtonProps['variant'], string> = {
    primary:
      'bg-indigo-600 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
    secondary:
      'bg-white font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50',
  };

  const sizeClasses: Record<ButtonProps['size'], string> = {
    xs: 'rounded-sm px-2 py-1 text-xs',
    sm: 'rounded-sm px-2 py-1 text-sm',
    md: 'rounded-md px-2.5 py-1.5 text-sm',
    lg: 'rounded-md px-3 py-2 text-sm',
    xl: 'rounded-md px-3.5 py-2.5 text-sm',
  };

  return (
    <button
      type="button"
      className={`${variantButton[variant]} ${sizeClasses[size]}`}
      {...props}
    >
      {label}
    </button>
  );
};
