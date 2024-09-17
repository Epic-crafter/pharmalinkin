import { FC, ReactNode } from 'react';

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

const CardHeader: FC<CardHeaderProps> = ({ children, className = '' }) => {
  return (
    <div className={`border-b border-gray-200 pb-2 mb-4 ${className}`}>
      {children}
    </div>
  );
};

export default CardHeader;