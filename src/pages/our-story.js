import React, { Component } from "react";
import Ourstory from "../components/our-story";
import Container from 'react-bootstrap/Container';

class OurStory extends Component {
    render(){
        return (
            <>
                <Container className="our-story container ">
                    <h1 class="text-center mb-5 ">Our Story</h1>
                        <Ourstory></Ourstory>
                      {/* image component */}
                </Container>
            </>
    
        )
    }

};

export default OurStory;