import React from "react";
import RsvpForm from "../components/rsvp-form";
import Container from 'react-bootstrap/Container';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';


const options = {
    gallery: '#my-gallery',
    children: 'a',
    pswpModule: () => import('photoswipe')
};
const lightbox = new PhotoSwipeLightbox(options);
lightbox.on('uiRegister', function() {
  lightbox.pswp.ui.registerElement({
    name: 'download-button',
    order: 8,
    isButton: true,
    tagName: 'a',

    // SVG with outline
    html: {
      isCustomSVG: true,
      inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
      outlineID: 'pswp__icn-download',
    },

    onInit: (el, pswp) => {
      el.setAttribute('download', '');
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');

      pswp.on('change', () => {
        console.log('change');
        el.href = pswp.currSlide.data.src;
      });
    }
  });
});
lightbox.init(); 


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
                    <ul id="my-gallery">
                        <li>
                            <a href="./images/IMG_9999.jpg"
                                data-pswp-width="3024" 
                                data-pswp-height="4032" 
                                target="_blank">
                                <img src="./images/IMG_9999.jpg" alt="Terese and Lizzy"/>
                            </a>
                        </li>
                        <li>
                            <a href="./images/IMG_9707.jpg"
                                data-pswp-width="4032"
                                data-pswp-height="3024" 
                                target="_blank">
                                <img src="./images/IMG_9707.jpg" alt="Terese and Lizzy"/>
                            </a>
                        </li>
                        <li>
                            <a href="./images/IMG_9195.jpg"
                                data-pswp-width="3024"
                                data-pswp-height="4032" 
                                target="_blank">
                                <img src="./images/IMG_9195.jpg" alt="Terese and Lizzy"/>
                            </a>
                        </li>
                        <li>
                            <a href="./images/IMG_9107.jpg"
                                data-pswp-width="1334"
                                data-pswp-height="750" 
                                target="_blank">
                                <img src="./images/IMG_9107.jpg" alt="Terese and Lizzy"/>
                            </a>
                        </li>
                        <li>
                            <a href="./images/IMG_9152.jpg"
                                data-pswp-width="1792"
                                data-pswp-height="950" 
                                target="_blank">
                                <img src="./images/IMG_9152.jpg" alt="Terese and Lizzy"/>
                            </a>
                        </li>
                        <li>
                            <a href="./images/IMG_9176.jpg"
                                data-pswp-width="1334"
                                data-pswp-height="750" 
                                target="_blank">
                                <img src="./images/IMG_9176.jpg" alt="Terese and Lizzy"/>
                            </a>
                        </li>
                        <li>
                            <a href="./images/beach.jpg"
                                data-pswp-width="1334"
                                data-pswp-height="750" 
                                target="_blank">
                                <img src="./images/beach.jpg" alt="Terese and Lizzy"/>
                            </a>
                        </li>
                        <li>
                            <a href="./images/early-ri.jpg"
                                data-pswp-width="4032"
                                data-pswp-height="3024" 
                                target="_blank">
                                <img src="./images/early-ri.jpg" alt="Terese and Lizzy"/>
                            </a>
                        </li>
                        <li>
                            <a href="./images/gams.jpg"
                                data-pswp-width="2448"
                                data-pswp-height="3264" 
                                target="_blank">
                                <img src="./images/gams.jpg" alt="Terese and Lizzy"/>
                            </a>
                        </li>
                        <li>
                            <a href="./images/grad.jpg"
                                data-pswp-width="3024"
                                data-pswp-height="4032" 
                                target="_blank">
                                <img src="./images/grad.jpg" alt="Terese and Lizzy"/>
                            </a>
                        </li>
                        <li>
                         <a href="./images/lizzy-cute.jpg"
                                data-pswp-width="3024"
                                data-pswp-height="4032" 
                                target="_blank">
                                <img src="./images/lizzy-cute.jpg" alt="Terese and Lizzy"/>
                            </a>
                        </li>
                        <li>
                            <a href="./images/maine.jpg"
                                data-pswp-width="3024"
                                data-pswp-height="4032" 
                                target="_blank">
                                <img src="./images/maine.jpg" alt="Terese and Lizzy"/>
                            </a>
                        </li>
                        <li>
                            <a href="./images/prov.jpg"
                                data-pswp-width="3024"
                                data-pswp-height="4032" 
                                target="_blank">
                                <img src="./images/prov.jpg" alt="Terese and Lizzy"/>
                            </a>
                        </li>
                        <li>
                            <a href="./images/wedding.jpg"
                                data-pswp-width="4032"
                                data-pswp-height="3024" 
                                target="_blank">
                                <img src="./images/wedding.jpg" alt="Terese and Lizzy"/>
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><g fill="#BFC994"><path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5"></path><path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z"></path></g></svg>
            <Container className="rsvp-home container d-flex align-items-center flex-column">
                <h2>RSVP</h2>
                <div className="form-container">
                    <RsvpForm></RsvpForm>
                </div>
            </Container>
        </>
            
            
    )
};

export default Home;