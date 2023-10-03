import React, {useState} from 'react';
import deflogo from '../logo.png';
import { Auth, db } from '../firebase_config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, deleteDoc } from 'firebase/firestore';
import DeleteIcon from '@mui/icons-material/Delete';
import ImagePopup from './ImagePopup';

const deleteDocument = async (collectionName, documentId) => {
  try {
    const documentRef = doc(db, collectionName, documentId);
    await deleteDoc(documentRef);
    alert('Your Art-work has been successfully deleted!');
    window.location.reload(); // Manually refresh the page
  } catch (error) {
    console.error('Error removing document: ', error);
  }
};

const DisplayPost = (props) => {
  const { logo, image, prompt, user } = props.post;
  const [userSession] = useAuthState(Auth);
  const [isImagePopupVisible, setIsImagePopupVisible] = useState(false);

  function handleDelete() {
    deleteDocument('posts', props.post.id);
  }

  const openImagePopup = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    setIsImagePopupVisible(true);
  };

  const closeImagePopup = () => {
    setIsImagePopupVisible(false);
  };

  return (
    <div className="relative group">
      <div className="relative shadow-lg hover:shadow-xl rounded-xl overflow-hidden">
      <a href="./ImagePopup" onClick={openImagePopup}>
          <img
            style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
            className="w-full h-auto object-cover transform scale-100 group-hover:scale-105"
            src={image}
            alt={prompt}
          />
        </a>
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {userSession && userSession.displayName === user && (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleDelete}
            >
              <DeleteIcon />
            </button>
          )}
        </div>
        <div
          className="bg-white p-4 rounded-b-xl absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ zIndex: 1 }}
        >
          <div className="flex items-center">
            <img className="w-8 h-8 rounded-full mr-2" src={logo ? logo : deflogo} alt={prompt} />
            <div>
              <span className="text-gray-600 text-sm">{user}</span>
              <p className="text-lg font-semibold">{prompt}</p>
            </div>
          </div>
        </div>
      </div>
      {isImagePopupVisible && (
        <ImagePopup image={image} user={user} prompt={prompt} onClose={closeImagePopup} />
      )}
    </div>
  );
};

export default DisplayPost;

