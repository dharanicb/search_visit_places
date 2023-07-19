// import React from 'react'

const ImageDetailsPopup = props => {
  const {image} = props
  console.log(props)

  return (
    <div className="image-details-popup">
      <div className="image-details-content">
        <img src={image.urls.regular} alt={image.alt_description} />
        <div className="image-details">
          <p>Author: {image.user.name}</p>
          <p>Description: {image.description || 'No description available'}</p>
        </div>
      </div>
    </div>
  )
}

export default ImageDetailsPopup
