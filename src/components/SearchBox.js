import {useState} from 'react'
import axios from 'axios'

const SearchBox = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('Animal')

  const handleSearch = async () => {
    const apiKey = '__QlKICeF05KxakJ4bgnIMtFk1QlteICIw1229B_Ozw'
    const apiUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=15&client_id=${apiKey}`

    try {
      const response = await axios.get(apiUrl)
      onSearch(response.data.results)
    } catch (error) {
      console.error('Error fetching images:', error)
    }
  }

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search Box with Search Button in the Right"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}

export default SearchBox
