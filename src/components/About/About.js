import React from 'react'
import "./About.css";
const About = ({ darkMode, setDarkMode, handleDarkModew }) => {
    const myStyle = {
        transition: 'all 0.4s linear',
        backgroundColor: `${darkMode ? "#3d3b3b" : "white"}`,
        color: `${darkMode ? "white" : "black"}`,
        borderColor: `${darkMode ? "white" : "black"}`,
    }
    return (
        <>
         <div className="about" styles={myStyle}>
            <p class="content">
                <h2 class="title">About</h2>
                Your one stop to get your text optimised the way you want.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, minus doloremque? Repellendus ratione voluptatem culpa sequi perspiciatis dolor facilis voluptates, expedita officiis sed? Atque ex ratione sed officia, voluptas asperiores explicabo, eligendi dolorem dolores deserunt aut! Repellat fuga aliquam dignissimos architecto, ullam minima nesciunt asperiores unde possimus assumenda omnis. Molestiae sequi quia quis id numquam.
            </p>
           <strong><i>-Prajwal Ladkat</i></strong>
        </div></>
       
    )
}

export default About;
