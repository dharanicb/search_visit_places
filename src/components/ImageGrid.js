// import React from 'react'

const ImageGrid = props => {
  const {images} = props
  return (
    <div className="image-grid">
      {images.map(image => (
        <div>
          <span>
            <dfn data-info={image.alt_description}>
              <img
                key={image.id}
                src={image.urls.regular}
                alt={image.alt_description}
              />
            </dfn>
          </span>
        </div>
      ))}
    </div>
  )
}

export default ImageGrid
