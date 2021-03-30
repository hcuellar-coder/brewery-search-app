import React from 'react'
import SearchBar from './SearchBar'
import BreweryDisplay from './BreweryDisplay'
import BreweryMap from './BreweryMap'
import Container from 'react-bootstrap/Container'

function Home() {
    return (
        <div>
            <BreweryMap />
            <Container fluid id="home-container">
                <SearchBar />
                <BreweryDisplay />
            </Container>
        </div>

    )
}

export default Home
