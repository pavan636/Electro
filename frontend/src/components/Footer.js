import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container>
            <Row>
                {/* py-3 refers to y-axis */}
                <Col className = 'text-center  py-3 '>  
                    Copyright &copy; Electro
                </Col>
            </Row>
        </Container>

    )
}

export default Footer
