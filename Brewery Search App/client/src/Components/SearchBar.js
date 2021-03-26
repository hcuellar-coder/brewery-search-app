import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

function SearchBar() {
    return (
        <Container id="search-bar-container">
            <Row id="search-bar-row">
                <Form>
                    <Form.Group>
                        <Form.Control placeholder="Search Breweries"></Form.Control>
                    </Form.Group>
                </Form>
                <Button id="search-bar-button">Search</Button>
            </Row>
        </Container>
    )
}

export default SearchBar
