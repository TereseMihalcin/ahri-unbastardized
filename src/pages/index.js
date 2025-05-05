import React from "react";
import RsvpForm from "../components/rsvp-form";
import Container from 'react-bootstrap/Container';


const Home = () => {
    return (
        <>
            <div className="title d-flex justify-content-center">
                <h1>Terese and Lizzy</h1>
            </div>
            <div className="photo-layer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><g fill="#FCF8EF"><path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5"></path><path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z"></path></g></svg>
                <div class="photos d-flex justify-content-center">
                    <div class="photo-container">
                    <ul>
                        <li>
                            <img src="./images/IMG_9999.png" alt="Terese and Lizzy"/>
                        </li>
                        <li>
                            <img src="./images/IMG_9195.png" alt="Terese and Lizzy"/>
                        </li>
                        <li>
                            <img src="./images/IMG_9707.png" alt="Terese and Lizzy"/>
                        </li>
                        <li>
                            <img src="./images/IMG_9107.png" alt="Terese and Lizzy"/>
                        </li>
                        <li>
                            <img src="./images/IMG_9152.jpg" alt="Terese and Lizzy"/>
                        </li>
                        <li>
                            <img src="./images/IMG_9176.jpg" alt="Terese and Lizzy"/>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><g fill="#BFC994"><path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5"></path><path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z"></path></g></svg>
            <Container className="rsvp container d-flex align-items-center flex-column">
                <h2>RSVP</h2>
                <div className="form-container">
                    <RsvpForm></RsvpForm>
                </div>
            </Container>
        </>
            
            
    )
};

export default Home;