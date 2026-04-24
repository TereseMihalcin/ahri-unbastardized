import React, { Component } from "react";
import Location from "../components/location";
import Container from 'react-bootstrap/Container';

class Locations extends Component {
    render(){
        return (
            <>
                <Container className="location container ">
                    <h1 class="text-center">Location</h1>
                    <div className="form-container">
                        <Location></Location>
                    </div>
                </Container>
            </>
    
        )
    }

};

export default Locations;