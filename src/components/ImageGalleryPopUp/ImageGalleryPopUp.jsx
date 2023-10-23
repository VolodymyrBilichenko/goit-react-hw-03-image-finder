import {ImageGalleryPopUpStyle} from './ImageGalleryPopUp.styled'

export const ImageGalleryPopUp = ({ showModal, largeImageURL, onClose }) => {

    const active = {
        display: showModal ? 'block' : 'none'
    };

    console.log(largeImageURL, 'largeImg');
    return (
        <ImageGalleryPopUpStyle style={active} className={`popup ${showModal ? 'active' : ''}`}>
            <div className="modal">
                <img src={largeImageURL} alt="Large Image" />
                <button className="popup__close" onClick={onClose}>
                    Close
                </button>
            </div>
        </ImageGalleryPopUpStyle>
    );
  };
  