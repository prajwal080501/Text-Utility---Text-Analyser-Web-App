import React from 'react'
import Textform from '../TextForm/Textform'

const Home = ({darkMode, setDarkMode, showAlert}) => {
    return (
        <div className="home" style={{marginTop: '50px'}}>
            <Textform darkMode={darkMode} showAlert={showAlert}/>
        </div>
    )
}

export default Home
