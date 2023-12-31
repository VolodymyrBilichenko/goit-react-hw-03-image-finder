import React, { Component } from 'react';
import { ImageGalleryPopUpStyle } from './ImageGalleryPopUp.styled';


export class ImageGalleryPopUp extends Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleEscPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleEscPress);
    }

    handleEscPress = (evt) => {
        if (evt.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleOverlayPress = (evt) => {
        if (evt.target === evt.currentTarget) {
            this.props.onClose();
        }
    }

    render() {
        const {showModal, largeImageURL, onClose} = this.props;
        
        if (!showModal) {
            return null;
        }

        return (
            <ImageGalleryPopUpStyle className="popup" onClick={this.handleOverlayPress}>
                <div className="modal">
                    <img src={largeImageURL} alt="Beautiful" />
                    <button className="popup__close" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 43 43" fill="none">
                            <line x1="10.8087" y1="10.4047" x2="32.0219" y2="31.6179" stroke="#C3A488" strokeWidth="4"/>
                            <line x1="10.4052" y1="31.6186" x2="31.6184" y2="10.4054" stroke="#C3A488" strokeWidth="4"/>
                        </svg>
                    </button>
                </div>
            </ImageGalleryPopUpStyle>
        )
    }
};
