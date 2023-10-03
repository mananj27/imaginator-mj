import React from 'react';
import '../ImagePopup.css'; // You can create a CSS file for styling
import CloseSharpIcon from '@mui/icons-material/CloseSharp'; // Assuming you have the Material-UI CloseIcon

const ImagePopup = ({ image, user, prompt, onClose }) => {
  const captionStyles = {
    color: 'white', // Change text color to white
    fontSize: '18px', // Adjust font size as needed
  };
  return (
    <div className="image-popup">
      <div className="image-popup-content">
        <button className="image-popup-close" onClick={onClose}>
          <CloseSharpIcon />
        </button>
        <img src={image} alt="Popup" />
        <div className="image-popup-caption">
          <p className="caption-user" style ={captionStyles}>{user}</p>
          <p className="caption-prompt" style ={captionStyles}>{prompt}</p>
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;

