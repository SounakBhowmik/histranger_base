
import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, size = 'md', alt = 'Avatar', ...props }, ref) => {
    return (
      <div 
        className={cn(
          'relative overflow-hidden rounded-full bg-secondary',
          {
            'w-8 h-8': size === 'sm',
            'w-12 h-12': size === 'md',
            'w-16 h-16': size === 'lg',
            'w-24 h-24': size === 'xl',
          },
          className
        )}
      >
        <img
          ref={ref}
          alt={alt}
          className="h-full w-full object-cover transition-opacity duration-300"
          {...props}
        />
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export { Avatar };
