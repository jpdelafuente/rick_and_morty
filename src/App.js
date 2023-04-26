import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


const EMAIL = 'mailtest@mail.com';
const PASSWORD = '123asd';

function App() {

   const [characters, setCharacters] = useState([])
   const location = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   

   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   },[access])

   function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (!data.name) {
         window.alert('¡No hay personajes con este ID!');
      } else {
         setCharacters((characters) => [...characters, data]);
      }
   });
   }
   
   const onClose = (id) => {
      setCharacters(
      characters.filter((character) => character.id !== Number(id))
   )
}

   return (
      <div className='App'>
         {
            location.pathname !== '/' ? <Nav onSearch={onSearch} setAccess={setAccess} /> : null
         }
         {/* <Nav onSearch={onSearch} /> */}
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route
               path='/home'
               element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route
               path='/about'
               element={<About/>}
            />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
         </Routes>

      </div>
   );
}

export default App;
