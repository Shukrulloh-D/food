import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = ({ className, variant = 'primary', children, ...props }) => {
  const base = 'px-6 py-3 font-medium transition-colors duration-200 rounded-sm disabled:opacity-50';
  const variants = {
    primary: 'bg-brand-accent text-white hover:bg-[#9a8468]',
    outline: 'border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white',
    ghost: 'text-white hover:text-brand-accent',
  };
  
  return (
    <button className={twMerge(clsx(base, variants[variant], className))} {...props}>
      {children}
    </button>
  );
};