import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-secondary-500 text-white hover:bg-secondary-600 hover:text-white focus:ring-secondary-500',
    secondary: 'bg-primary-600 text-white hover:bg-primary-700 hover:text-white focus:ring-primary-600',
    outline: 'border-2 border-secondary-500 bg-secondary-500 text-white hover:bg-secondary-600 hover:text-white focus:ring-secondary-500',
  };
  
  const sizes = {
    sm: 'px-10 py-3 text-sm',
    md: 'px-12 py-4 text-sm',
    lg: 'px-14 py-4.5 text-base',
  };
  
  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );
  
  if (href) {
    return (
      <Link href={href} className={classes} style={{ color: '#ffffff' }}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={classes} style={{ color: '#ffffff' }} {...props}>
      {children}
    </button>
  );
}
