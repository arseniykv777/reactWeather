import './SearchBar.scss'
import useSearchInput from '../model/useSearchInput.js';

const SearchBar = () => {
  const handleChange = useSearchInput();

  return (
    <input type="text"
           placeholder={'Поиск местоположения'}
           className={'search-bar-input'}
           onKeyDown={handleChange}/>
  )
}

export default SearchBar;