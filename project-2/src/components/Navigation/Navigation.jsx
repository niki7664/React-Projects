import React from 'react'
import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className='logo'>
            <img src="/images/Frame 2 1.png" alt="Logo"/> 
        </div>

        <ul >
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navigation