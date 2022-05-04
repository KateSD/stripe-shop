import React from 'react';
import '../styles/Home.css'
import Product from "./Product";


const Home = () => {
    return (
        <div className="home">
            <div className="home_container">

                <img
                    className="home__image"
                    src="	https://m.media-amazon.com/images/I/612AeTviUNL._SX3000_.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product
                        id='54301925'
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={14.59}
                        image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY436_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                    <Product
                        id='49538094'
                        title='COOKLEE Stand Mixer, 9.5 Qt. 660W 10-Speed Electric Kitchen Mixer with Dishwasher-Safe Dough Hooks, Flat Beaters, Wire Whip & Pouring Shield Attachments for Most Home Cooks, SM-1551, Ruby Red'
                        price={139.99}
                        image="https://m.media-amazon.com/images/I/71TRLLjgj5L._AC_SX679_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id='09532094'
                        title='SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black, QHD, 120Hz'
                        price={1199.99}
                        image="https://m.media-amazon.com/images/I/71916r38cNL._AC_UY436_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                    <Product
                        id='19834103'
                        title='NordicTrack T Series Treadmills'
                        price={549.99}
                        image="https://m.media-amazon.com/images/I/719uh1Um6aL._AC_SX679_.jpg"
                        rating={4}
                    />
                    <Product
                        id='92645294'
                        title='DEWALT 20V MAX* XR Oscillating Tool Kit, 3-Speed (DCS356C1)'
                        price={99.00}
                        image="https://m.media-amazon.com/images/I/71n1TZHn6BS._AC_SL1500_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id='29402645'
                        title='Arlo Ultra - 4K UHD Wire-Free Security 2 Camera System | Indoor/Outdoor with Color Night Vision, 180° View, 2-Way Audio, Spotlight, Siren | Compatible with Alexa and HomeKit | (VMS5240) (Renewed)'
                        price={269.99}
                        image="https://m.media-amazon.com/images/I/616UjkW9B1L._AC_SL1500_.jpg"
                        rating={4}
                    />
                </div>=
            </div>
        </div>
    );
};

export default Home;
