import React from 'react'


const SearchInput = ({onSeacrh}) => <div>
    <label htmlFor='search'>Input type</label>
    <input onChange={(e) => onSeacrh(e.target.value)} id="search" type="text" />
</div>

export default SearchInput