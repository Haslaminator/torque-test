import React from 'react';
import './Searchbox.styles.scss';

const Searchbox = ({ filterBy, handleInputChange, handleRadioChange }) => {
    return (
        <div className='searchbox'>
            <h1>Filter by</h1>

            <label
                className={filterBy === 'site' ? 'checked' : ''}
                htmlFor='site'
            >
                <input
                    type='radio'
                    id='site'
                    name='filterOpt'
                    onClick={handleRadioChange}
                />{' '}
                Site
            </label>
            <label
                className={filterBy === 'client' ? 'checked' : ''}
                htmlFor='client'
            >
                <input
                    type='radio'
                    id='client'
                    name='filterOpt'
                    onClick={handleRadioChange}
                />
                Client
            </label>
            <label
                className={filterBy === 'orders' ? 'checked' : ''}
                htmlFor='orders'
            >
                <input
                    type='radio'
                    id='orders'
                    name='filterOpt'
                    onClick={handleRadioChange}
                />
                Orders
            </label>
            <br />
            <input
                type='search'
                placeholder='enter filter criteria...'
                onChange={handleInputChange}
            />
        </div>
    );
};

export default Searchbox;
