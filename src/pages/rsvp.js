import React, { Component } from "react";
import RsvpForm from "../components/rsvp-form";
import Container from 'react-bootstrap/Container';

class Rsvp extends Component {
    render(){
        return (
            <>
                <Container className="rsvp container d-flex align-items-center flex-column">
                    <h2>RSVP</h2>
                    <div className="form-container">
                        <RsvpForm></RsvpForm>
                    </div>
                </Container>
            </>
    
        )
    }

};

export default Rsvp;