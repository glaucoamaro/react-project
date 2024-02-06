import React from 'react';

const image =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

export default function Header() {
  return (
    <div className="profile-button">
      <div className="profile_button-container">
        <img src={image} alt="Logo" />
      </div>
    </div>
  );
}
