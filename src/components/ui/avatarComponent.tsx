import * as Avatar from '@radix-ui/react-avatar';

const AvatarComponent = ({ src, alt }: { src: string; alt: string }) => (
  <Avatar.Root>
    <Avatar.Image className="rounded-full h-16 w-16" src={src} alt={alt} />
    <Avatar.Fallback className="rounded-full h-16 w-16 bg-gray-200" delayMs={600}>
      {alt.charAt(0)}
    </Avatar.Fallback>
  </Avatar.Root>
);

export default AvatarComponent;
