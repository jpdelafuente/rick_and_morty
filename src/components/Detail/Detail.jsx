import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

const Detail = () => {

    const { id } = useParams();
    const [ character, setCharacter ] = useState({})

    useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
        if (data.name) {
            setCharacter(data);
        } else {
            window.alert('No hay personajes con ese ID');
        }
    });
    return setCharacter({});
    }, [id]);
    
    return (
        <>
            <h1>Details:</h1>
            {character ? (
                <div>
                <h2>Name: {character.name}</h2>
                <h2>Status: {character.status}</h2>
                <h2>Species: {character.species}</h2>
                <h2>Gender: {character.gender}</h2>
                <h2>Origin: {character.origin?.name}</h2>
                <img src={character.image} alt={character.name} />
                </div>
            ) : ('')
            }
        </>
        )
    
}

export default Detail