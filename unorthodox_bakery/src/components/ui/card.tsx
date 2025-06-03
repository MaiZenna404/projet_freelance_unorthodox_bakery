// components/ui/card.tsx
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className = '', children, ...props }) => {
  const baseClasses = 'rounded-lg border bg-card text-card-foreground shadow-sm';
  
  return (
    <div className={`${baseClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardHeader: React.FC<CardProps> = ({ className = '', children, ...props }) => {
  const baseClasses = 'flex flex-col space-y-1.5 p-6';
  
  return (
    <div className={`${baseClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardTitle: React.FC<CardProps> = ({ className = '', children, ...props }) => {
  const baseClasses = 'text-2xl font-semibold leading-none tracking-tight';
  
  return (
    <h3 className={`${baseClasses} ${className}`} {...props}>
      {children}
    </h3>
  );
};

const CardContent: React.FC<CardProps> = ({ className = '', children, ...props }) => {
  const baseClasses = 'p-6 pt-0';
  
  return (
    <div className={`${baseClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

export { Card, CardContent, CardHeader, CardTitle };