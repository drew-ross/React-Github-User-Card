import React from 'react';

const Search = props => {

    return (
        <form className='Search' onSubmit={props.handleSubmit}>
            <input
                id='search-input'
                name='search'
                type='text'
                value={props.searchText}
                onChange={props.handleChanges}
            >
            </input>
            <button>Search User</button>
        </form>
    );
};

export default Search;