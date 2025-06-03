// components/ui/checkbox.tsx
import React from 'react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ className = '', ...props }) => {
  const baseClasses = 'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground';
  
  return (
    <input
      type="checkbox"
      className={`${baseClasses} ${className}`}
      {...props}
    />
  );
};

export { Checkbox };