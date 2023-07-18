// import React from 'react'

const ImageGrid = props => {
  const {images} = props
  return (
    <div className="image-grid">
      {images.map(image => (
        <img
          key={image.id}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      ))}
    </div>
  )
}

export default ImageGrid
