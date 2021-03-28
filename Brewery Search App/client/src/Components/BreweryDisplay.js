import React from 'react'
import BreweryList from './BreweryList'
import BreweryMap from './BreweryMap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function BreweryDisplay() {
    return (
        <Container id="brewerydisplay-container">
            <Row id="brewerydisplay-row">
                <Col id="brewerylist-col"><BreweryList /></Col>
                <Col id="brewerymap-col"><BreweryMap /></Col>
            </Row>
        </Container>
    )
}

export default BreweryDisplay
