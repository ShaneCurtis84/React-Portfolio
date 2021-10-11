import React from 'react';
import NavBar from './Navigation';


export default function Header({ currentPage, handlePageChange }) {
    return (
        <header>
         
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            
        </header>
    );
}
