import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

function Home() {
    return (
        <Row>
            <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center home-text-container">
                <div>
                    <h1 className="home-heading">Engage and Connect Through Real-Time Group and Private Chats</h1>
                    <p className="home-subtitle">Connect instantly, discuss passionately. Explore topics, join groups, and chat privately with VoxAura.</p>
                    <LinkContainer to="/chat">
                        <Button variant="success" className="home-button">
                            Get Started <i className="fas fa-comments home-message-icon"></i>
                        </Button>
                    </LinkContainer>
                </div>
            </Col>
            <Col md={6} className="home__bg"></Col>
        </Row>
    );
}

export default Home;
