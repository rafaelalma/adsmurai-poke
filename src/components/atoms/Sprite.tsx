import { ReactElement, RefObject } from "react";

import "./Sprite.scss";

type SpriteProps = {
  spriteSrc: string;
  alt: string;
  imgRef: RefObject<HTMLImageElement> | null;
  loaded: boolean;
  onLoad: () => void;
};

export default function Sprite({
  spriteSrc,
  alt,
  imgRef,
  loaded,
  onLoad,
}: SpriteProps): ReactElement {
  return (
    <>
      {spriteSrc ? (
        <img
          ref={imgRef}
          onLoad={onLoad}
          className="sprite"
          src={spriteSrc}
          alt={alt}
          hidden={!loaded}
        />
      ) : null}
      {!loaded ? (
        <div data-testid="placeholder" className="sprite sprite--pending" />
      ) : null}
    </>
  );
}
