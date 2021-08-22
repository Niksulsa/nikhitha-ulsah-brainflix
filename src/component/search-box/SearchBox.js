import "./search.scss";

const SearchBox=({placeholder,handleChange})=>(
    <input 
    className='header__search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
    />
);

export default SearchBox;