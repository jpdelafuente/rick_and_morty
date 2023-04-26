import style from './Favorites.module.css';
import Card from '../Card/Card';
import { connect } from 'react-redux';

const Favorites = ({ myFavorites }) => {

    
    return (
        <div>
            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                            key={fav.id}
                            id={fav.id}
                            // name={fav.name}
                            gender={fav.gender}
                            species={fav.species}
                            image={fav.image}
                            status={fav.status}
                            onClose={fav.onClose}
                        />
                    )
            })}
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