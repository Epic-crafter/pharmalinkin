import { FC } from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium ${className}`}>
      {children}
    </span>
  );
};

export default Badge;