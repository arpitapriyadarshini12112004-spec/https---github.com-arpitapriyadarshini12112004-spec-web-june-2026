import Header from './components/Header'
import SerachBar from './components/SearchBar'
import SelectMenu from "./components/SelectMenu"
import CountriesList from './components/CountriesList' 
import './App.css'
import { useState } from 'react'


const App = () => {
     const [query, setQuery] = useState("")

  return (
    
    <div className='App'>
    <Header/>
    <main>
<div className="countries-container">
  <SerachBar setQuery={setQuery}/>
  <SelectMenu/>
</div>
<CountriesList query={query}/>
    </main>
    </div>
        
  )
}

export default App