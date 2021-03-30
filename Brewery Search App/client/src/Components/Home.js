import React from 'react'
import SearchBar from './SearchBar'
import BreweryDisplay from './BreweryDisplay'
import BreweryList from './BreweryList'
import BreweryMap from './BreweryMap'
import Container from 'react-bootstrap/Container'

function Home() {
    return (
        <div>
            <BreweryMap />
            <Container fluid id="home-container">
                <SearchBar />
                <BreweryList />
            </Container>
        </div>

    )
}

export default Home
