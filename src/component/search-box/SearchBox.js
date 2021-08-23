const SearchBox=({handleChange})=>(
    <input 
    className='header__search'
    type='search'
    placeholder='Search'
    onChange={handleChange}
    />
);

export default SearchBox;