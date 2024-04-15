import React, { useState } from 'react';
import App from './App_form.jsx';
import SongPlaying from './SongPlaying.jsx';
import './mainFunc.css';
function Mainfunction(){
    const [currentPage,setCurrentPage] = useState('one');


const handleToggle=()=>{
    setCurrentPage(currentPage === 'User'?'Song':'User');
}

return (
    <div>
        <button className = "toggle"onClick={handleToggle}>Switch to {currentPage==='User'?'Song':'User'}</button>
        {currentPage ==='User'?<App/>:<SongPlaying/>}
    </div>
);
}
export default Mainfunction;