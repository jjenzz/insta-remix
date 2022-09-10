import * as React from 'react';

/* -------------------------------------------------------------------------------------------------
 * Gallery
 * -----------------------------------------------------------------------------------------------*/

type GalleryElement = React.ElementRef<'ul'>;
interface GalleryProps extends React.ComponentPropsWithoutRef<'ul'> {}

const Gallery = React.forwardRef<GalleryElement, GalleryProps>((props, forwardedRef) => (
  <ul {...props} ref={forwardedRef} style={styles.gallery} />
));

Gallery.displayName = 'Gallery';

/* -------------------------------------------------------------------------------------------------
 * GalleryItem
 * -----------------------------------------------------------------------------------------------*/

type GalleryItemElement = React.ElementRef<'li'>;
interface GalleryItemProps extends React.ComponentPropsWithoutRef<'li'> {}

const GalleryItem = React.forwardRef<GalleryItemElement, GalleryItemProps>(
  (props, forwardedRef) => <li {...props} ref={forwardedRef} />
);

GalleryItem.displayName = 'GalleryItem';

/* -------------------------------------------------------------------------------------------------
 * GalleryImage
 * -----------------------------------------------------------------------------------------------*/

type GalleryImageElement = React.ElementRef<'img'>;
interface GalleryImageProps extends React.ComponentPropsWithoutRef<'img'> {}

const GalleryImage = React.forwardRef<GalleryImageElement, GalleryImageProps>(
  (props, forwardedRef) => (
    <img {...props} ref={forwardedRef} alt="" width={300} height={300} style={styles.image} />
  )
);

GalleryImage.displayName = 'GalleryImage';

/* ---------------------------------------------------------------------------------------------- */

const styles: Record<string, React.CSSProperties> = {
  gallery: {
    display: 'grid',
    justifyContent: 'center',
    padding: 0,
    gridGap: 0,
    listStyle: 'none',
    gridTemplateColumns: 'repeat(auto-fill, 300px)',
  },
  image: {
    verticalAlign: 'middle',
  },
};

export { Gallery as Root, GalleryItem as Item, GalleryImage as Image };
