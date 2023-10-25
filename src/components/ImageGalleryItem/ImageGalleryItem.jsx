import { ImageGalleryItemStyle } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, webformatURL, tags, largeImageURL,  onImageClick}) => {
  const handleOpenPopUp = () =>{
    onImageClick(largeImageURL);
  }

  return (
    <ImageGalleryItemStyle key={id} onClick={handleOpenPopUp}>
      <img className="galleryItem__image" src={webformatURL} alt={tags} />
    </ImageGalleryItemStyle>
  );
};
