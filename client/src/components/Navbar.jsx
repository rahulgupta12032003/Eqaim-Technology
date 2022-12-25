import React from 'react'
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <>
      <div>
         <div className={styles.Header}>
           <h2 className={styles.CompanyName}>Eqaim Blog</h2>
         </div>
      </div>   
    </>
  )
}

export default Navbar