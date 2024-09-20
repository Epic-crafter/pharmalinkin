// Create an Avatar component manually
const Avatar = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
    return (
      <img
        className={`rounded-full ${className}`}
        alt={alt}
        src={src}
      />
    );
  };
  
  export default Avatar;
  