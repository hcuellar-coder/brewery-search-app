import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

function BreweryList() {
    return (
        <Container fluid id="brewerylist-container">
            <Card className="brewerylist-card">
                <Card.Body>
                    <Card.Title>Brewery Name</Card.Title>
                    <Card.Subtitle> City </Card.Subtitle>
                    <Card.Text>
                        More information
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="brewerylist-card">
                <Card.Body>
                    <Card.Title>Brewery Name</Card.Title>
                    <Card.Subtitle> City </Card.Subtitle>
                    <Card.Text>
                        More information
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default BreweryList
