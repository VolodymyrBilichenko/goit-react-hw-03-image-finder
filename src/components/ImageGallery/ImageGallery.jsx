import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyle } from './ImageGallery.styled';

export const ImageGallery = ({ imagesLi, onImageClick }) => {
  return (
    <ImageGalleryStyle>
      {imagesLi.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem 
          key={id} 
          webformatURL={webformatURL} 
          tags={tags} 
          largeImageURL={largeImageURL}
          onImageClick={onImageClick}
        />
      ))}
    </ImageGalleryStyle>
  );
};