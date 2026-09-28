import React, { useState } from 'react'
import CountriesList from './CountriesList'
import SelectMenu from './SelectMenu'
import SearchBar from './SearchBar'
import Header from './Header'

const Home = () => {
  const [query, setQuery] = useState("")

  return (
    
    <div className='App'>
    <main>
<div className="countries-container">
  <SearchBar setQuery={setQuery}/>
  <SelectMenu/>
</div>
<CountriesList query={query}/>
    </main>
    </div>
        
  )
}

export default Home