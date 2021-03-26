import React from 'react'
import SearchBar from './SearchBar'
import BreweryDisplay from './BreweryDisplay'
import Container from 'react-bootstrap/Container'

function Home() {
    return (
        <Container fluid id="home-container">
            <h1 className='home-header'>Brewery Search App</h1>
            <SearchBar />
            <BreweryDisplay />
        </Container>
    )
}

export default Home
