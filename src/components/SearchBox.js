import React from 'react';

const SearchBox = ({ pokeSubmit, clear }) => {
    return (
        <div>
            <form onSubmit={pokeSubmit}>
                <input type="search" className='pokeForm pa3 ba b--black bg-lightest-blue w-20 mw5' />
                <input type="submit" className='pa3 ba b--black bg-blue fw7 white' />
                <input type="reset" value="Clear" onClick={clear} className='pa3 ba b--black bg-blue fw7 ma2 white' />
            </form>
        </div>
    );

}
export default SearchBox;