import { FC, ReactNode } from 'react';

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

const CardContent: FC<CardContentProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {children}
    </div>
  );
};

export default CardContent;