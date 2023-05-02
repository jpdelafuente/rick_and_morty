import { Link } from 'react-router-dom';
import style from './Card.module.css';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card(props) {
   const {id, name, gender, species, image, status, origin, onClose, addFav, removeFav, myFavorites  } = props
   
   const [isFav, setIsFav] = useState(false);
   
   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav(props)
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   

   return (


      <div className={style.container}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <div className={style.containerCard}>
            <div className={style.front}>
               <img  
                  src={image} 
                  alt={name} 
                  className={style.image} 
               />
            </div>
         
            <div className={style.back}>
               <button 
                  className={style.btn}
                  onClick={()=> onClose(id)}
               >
                     X
               </button>

               <Link to={`/detail/${id}`}>
                  <h2 className={style.link}>{name}</h2>
               </Link>
               <h2>{species}</h2>
               <h2>{gender}</h2>
               <h2>{status}</h2>
               <h2>{origin.name}</h2>
            </div>

         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)