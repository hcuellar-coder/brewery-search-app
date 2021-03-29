import React from 'react'
import BreweryList from './BreweryList'
import BreweryMap from './BreweryMap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function BreweryDisplay() {
    return (
        <Container id="brewerydisplay-container">
            <Row id="brewerydisplay-row">
                <BreweryList />
            </Row>
            <Row id="brewerydisplay-row">
                <BreweryMap />
            </Row>
        </Container>
    )
}

export default BreweryDisplay
