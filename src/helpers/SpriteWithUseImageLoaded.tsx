import Sprite from "components/atoms/Sprite";
import useImageLoaded from "hooks/useImageLoaded";

type SpriteWithUseImageLoadedProps = {
  spriteSrc: string;
  alt: string;
};

export default function SpriteWithUseImageLoaded({
  spriteSrc,
  alt,
}: SpriteWithUseImageLoadedProps) {
  const { imgRef, loaded, onLoad } = useImageLoaded();

  return (
    <Sprite
      spriteSrc={spriteSrc}
      alt={alt}
      imgRef={imgRef}
      loaded={loaded}
      onLoad={onLoad}
    />
  );
}
