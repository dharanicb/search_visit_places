import {useState} from 'react'
import './App.css'
import SearchBox from './components/SearchBox'
import ImageGrid from './components/ImageGrid'
import ImageDetailsPopup from './components/ImageDetailsPopup'

function App() {
  const [images, setImages] = useState([])
  const [hoveredImage, setHoveredImage] = useState(null)

  const handleSearch = data => {
    setImages(data)
  }

  const handleImageHover = image => {
    setHoveredImage(image)
  }

  return (
    <div className="app">
      <header className="display_headers">
        <img
          src="https://drive.google.com/uc?id=10uGQh49ckZn2mptvCHmFnVXGWK3a3dI_"
          alt="RiseUP"
          className="logo-icon"
        />
        <h1 className="logo-text">Search Visiting Places</h1>
      </header>
      <main>
        <SearchBox onSearch={handleSearch} />
        {images.length > 0 ? (
          <ImageGrid images={images} onImageHover={handleImageHover} />
        ) : (
          <div className="loading">Loading...</div>
        )}
      </main>
      {hoveredImage && <ImageDetailsPopup image={hoveredImage} />}
    </div>
  )
}

export default App
