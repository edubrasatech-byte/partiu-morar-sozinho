import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = '', variant = 'default', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
    
    const variants = {
      default: 'bg-surface-100 text-text-600',
      success: 'bg-mint-100 text-green-700',
      warning: 'bg-amber-500/20 text-amber-500',
      danger: 'bg-danger-600/10 text-danger-600',
      info: 'bg-navy-900/10 text-navy-900'
    };

    return (
      <span ref={ref} className={`${baseStyles} ${variants[variant]} ${className}`} {...props} />
    );
  }
);

Badge.displayName = 'Badge';
