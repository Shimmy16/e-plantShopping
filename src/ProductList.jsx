import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch } from 'react-redux'; // Redux importieren
import { addItem } from './CartSlice'; // addItem importieren

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(true); // Sichtbarkeit der Pflanzenansicht

    const dispatch = useDispatch(); // Redux useDispatch

    const plantsArray = [
        // Dein Pflanzenarray hier
    ];

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center', // Schreibfehler korrigiert
        fontSize: '20px',
    };

    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    };

    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Zeigt den Warenkorb an
        setShowPlants(false); // Versteckt die Pflanzenansicht
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Zeigt die Pflanzenansicht an
        setShowCart(false); // Versteckt den Warenkorb
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
        setShowPlants(true); // Zeigt die Pflanzenansicht an
    };

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant)); // Fügen Sie das Element dem Warenkorb hinzu
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" style={{ textDecoration: 'none' }}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div> 
                        <a href="#" onClick={handlePlantsClick} style={styleA}>Plants</a>
                    </div>
                    <div> 
                        <a href="#" onClick={handleCartClick} style={styleA}>
                            <h1 className='cart'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                                    <rect width="156" height="156" fill="none"></rect>
                                    <circle 
