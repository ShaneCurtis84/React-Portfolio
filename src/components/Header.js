import React from 'react';
import NavBar from './Navigation';


export default function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <h1>Shane Curtis</h1>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            
        </header>
    );
}
