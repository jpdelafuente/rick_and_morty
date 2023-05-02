import style from './Favorites.module.css';
import Card from '../Card/Card';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from 'react';


const Favorites = ({ myFavorites }) => {

    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(!aux);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }
    
    return (
        <div>
            <div>
                <select onChange={ handleOrder }>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select onChange={ handleFilter }>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div>
                {
                    myFavorites?.map(fav => {
                        return (
                            <Card
                                key={fav.id}
                                id={fav.id}
                                name={fav.name}
                                gender={fav.gender}
                                species={fav.species}
                                image={fav.image}
                                status={fav.status}
                                origin={fav.origin}
                                onClose={fav.onClose}
                            />
                        )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}
export default connect(
    mapStateToProps,
    null)(Favorites);