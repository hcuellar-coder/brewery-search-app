import React from 'react'
import BreweryList from './BreweryList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function BreweryDisplay() {
    return (
        <Container fluid id="brewerydisplay-container">
            <Row id="brewerydisplay-row">
                <Col><BreweryList /></Col>
            </Row>
        </Container>
    )
}

export default BreweryDisplay
