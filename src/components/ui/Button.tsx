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
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 font-sans';
  
  const variants = {
    primary: 'bg-secondary-500 text-white hover:bg-secondary-600 hover:text-white focus:ring-secondary-500',
    secondary: 'bg-primary-600 text-white hover:bg-primary-700 hover:text-white focus:ring-primary-600',
    outline: 'border-2 border-secondary-500 bg-secondary-500 text-white hover:bg-secondary-600 hover:text-white focus:ring-secondary-500',
  };
  
  const sizes = {
    sm: 'px-16 py-5 text-sm',
    md: 'px-16 py-5 text-sm',
    lg: 'px-20 py-6 text-base',
  };
  
  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );
  
  const inlineStyles = {
    paddingLeft: size === 'lg' ? '5rem' : '4rem',
    paddingRight: size === 'lg' ? '5rem' : '4rem',
    paddingTop: size === 'lg' ? '1.5rem' : '1.25rem',
    paddingBottom: size === 'lg' ? '1.5rem' : '1.25rem',
    fontSize: size === 'lg' ? '1rem' : '0.875rem',
    color: '#ffffff',
    fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
  };
  
  if (href) {
    return (
      <Link href={href} className={classes} style={inlineStyles}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={classes} style={inlineStyles} {...props}>
      {children}
    </button>
  );
}
