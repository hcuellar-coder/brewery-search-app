import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function SearchBar() {
    return (
        <Container fluid id="search-bar-container">
            <Row id="search-bar-row">
                <Col id="search-bar-input-col">
                    <Form>
                        <Form.Group>
                            <Form.Control id="search-bar-form-control" placeholder="Search Breweries"></Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
                <Col id="search-bar-button-col">
                    <Button id="search-bar-button">Search</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBar
