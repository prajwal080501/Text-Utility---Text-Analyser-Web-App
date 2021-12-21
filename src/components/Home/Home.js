import React from 'react'
import Textform from '../TextForm/Textform'

const Home = ({darkMode, setDarkMode, showAlert}) => {
    return (
        <div className="home" style={{marginTop: '50px'}}>
            <Textform  showAlert={showAlert}/>
        </div>
    )
}

export default Home
