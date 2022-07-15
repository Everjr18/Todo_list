import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
const Header = () => {
    return (
        <nav>
            <div className="nav-left">
               <h2>July</h2>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className="nav-right">
                <FontAwesomeIcon icon={faCalendar} />
                <div className='icon'>
                <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>

        </nav>
    );
}

export {Header};