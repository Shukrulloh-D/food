import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Input = forwardRef(({ className, label, error, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm text-gray-400">{label}</label>}
      <input
        ref={ref}
        className={twMerge(
          'bg-transparent border-b border-gray-500 text-white py-2 outline-none focus:border-brand-accent transition-colors',
          error && 'border-red-500',
          className
        )}
        {...props}
      />
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
});