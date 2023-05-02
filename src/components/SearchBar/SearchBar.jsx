import { useState } from "react";
import style from './SearchBar.module.css'
import imageLogo from '../../img/logo.png'

export default function SearchBar(props) {
   let [ id, setId ] = useState('');

   const handleEnter = (event) => {
      if (event.key === 'Enter') {
         props.onSearch(id);
      }
      setTimeout(() => {
         setId('')
      }, 500);
   }

   const handleChange = (evento) => {
      //console.log(evento);
      setId(evento.target.value)
   }

   return (
      <div className={style.containerSearch}>
         <img 
            src={imageLogo} 
            alt="logo rick and morty" 
            className={style.logo} 
         />
         
         <div className={style.containerInput}>
         <input 
            type='search' 
            placeholder="Search..." 
            className={style.input}
            onKeyUp={handleEnter}
            onChange={handleChange}
            value = {id}
         />
         <button 
            onClick={()=> props.onSearch(id)}
            className={style.btn}
         >
         </button>
         </div>
      </div>
   );
}
