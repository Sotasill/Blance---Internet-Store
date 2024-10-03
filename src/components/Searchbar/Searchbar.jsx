import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import css from './Searchbar.module.css'

const Searchbar = () => {
    const [inputValue, setInputValue] = useState("");
      
   const handleChange = (evt) => {
     setInputValue(evt.target.value);
   };  

    return (
      <div className={css.searchbar}>
        <CiSearch className={css.searchicon} size={18} />
        <input type="text" value={inputValue} onChange={handleChange} placeholder="Поиск" />
       
      </div>
    );
}

export default Searchbar 