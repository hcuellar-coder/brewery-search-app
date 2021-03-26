import React from 'react'
import SearchBar from './SearchBar'
import BreweryDisplay from './BreweryDisplay'

function Home() {
    return (
        <div>
            <h1 className='home-header'>Brewery Search App</h1>
            <SearchBar />
            <BreweryDisplay />
        </div>
    )
}

export default Home
